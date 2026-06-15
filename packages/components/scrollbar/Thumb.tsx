import React, { type CSSProperties, useEffect, useRef, useState } from 'react'
import type { ThumbProps, ThumbRef } from './types'
import { BAR_MAP, renderThumbStyle } from './util'

/**
 * 簡易 fade 動畫組件（替代 Vue 的 <transition name="el-scrollbar-fade">）
 */
const FadeTransition = ({ show, name, children }: any) => {
  const [display, setDisplay] = useState(show)

  useEffect(() => {
    if (show) {
      setDisplay(true)
    } else {
      const timer = setTimeout(() => setDisplay(false), 200)
      return () => clearTimeout(timer)
    }
  }, [show])

  return (
    <div
      className={`${name}-enter ${show ? `${name}-enter-active` : `${name}-leave-active`}`}
      style={{ transition: 'opacity .2s' }}
    >
      {display ? children : null}
    </div>
  )
}

/**
 * Thumb 組件
 * 渲染單個自定義滾動條（水平或垂直），處理拖拽與點擊軌道的交互邏輯
 */
export const Thumb = React.forwardRef<ThumbRef, ThumbProps>((props, ref) => {
  const {
    vertical,
    size,
    move,
    ratio,
    always,
    scrollbar
  } = props

  const instanceRef = useRef<HTMLDivElement | null>(null)
  const thumbRef = useRef<HTMLDivElement | null>(null)

  React.useImperativeHandle(ref, () => ({
    el: instanceRef.current
  }))

  const [visible, setVisible] = useState(false)
  const [cursorDown, setCursorDown] = useState(false)
  const [cursorLeave, setCursorLeave] = useState(false)
  
  // 記錄拖拽時的初始鼠標位置
  const thumbState = useRef<{ X?: number; Y?: number }>({})

  // 獲取當前方向（垂直或水平）對應的屬性映射
  const bar = vertical ? BAR_MAP.vertical : BAR_MAP.horizontal

  // 計算並應用 thumb 的變換樣式（translate）
  const thumbStyle: CSSProperties = renderThumbStyle({
    size,
    move,
    bar
  })

  // 內部偏移比例，用於修正點擊軌道或拖拽時的相對位置計算
  const offsetRatio = (() => {
    if (!instanceRef.current || !thumbRef.current || !scrollbar?.wrapElement) return 1

    return (
      instanceRef.current[bar.offset] ** 2 /
      scrollbar.wrapElement[bar.scrollSize] /
      ratio /
      thumbRef.current[bar.offset]
    )
  })()

  /**
   * 點擊 Thumb 時觸發拖拽
   */
  const clickThumbHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (e.ctrlKey || [1, 2].includes(e.button)) return

    window.getSelection()?.removeAllRanges()
    startDrag(e)

    const el = e.currentTarget as HTMLDivElement
    // 記錄鼠標點擊位置相對於 Thumb 的偏移
    thumbState.current[bar.axis] =
      el[bar.offset] - (e[bar.client] - el.getBoundingClientRect()[bar.direction])
  }

  /**
   * 點擊滾動條軌道（Track）時直接跳轉
   */
  const clickTrackHandler = (e: React.MouseEvent) => {
    if (!thumbRef.current || !instanceRef.current || !scrollbar || !scrollbar.wrapElement) return

    // 計算點擊位置與軌道起點的距離
    const offset = Math.abs(
      (e.currentTarget as HTMLElement).getBoundingClientRect()[bar.direction] - e[bar.client]
    )

    const thumbHalf = thumbRef.current[bar.offset] / 2
    // 根據比例計算目標百分比
    const thumbPositionPercentage =
      ((offset - thumbHalf) * 100 * offsetRatio) / instanceRef.current[bar.offset]

    // 直接設置外層包裹元素的 scroll 值
    scrollbar.wrapElement[bar.scroll] =
      (thumbPositionPercentage * scrollbar.wrapElement[bar.scrollSize]) / 100
  }

  /**
   * 開始拖拽
   * 綁定全局 mousemove 與 mouseup 事件
   */
  const startDrag = (e: MouseEvent | React.MouseEvent) => {
    e.stopPropagation()
    setCursorDown(true)

    document.addEventListener('mousemove', mouseMoveDocumentHandler)
    document.addEventListener('mouseup', mouseUpDocumentHandler)
    document.onselectstart = () => false
  }

  /**
   * 拖拽過程中的移動處理
   */
  const mouseMoveDocumentHandler = (e: MouseEvent) => {
    if (!instanceRef.current || !thumbRef.current || !scrollbar || !scrollbar.wrapElement) return
    if (!cursorDown) return

    const prevPage = thumbState.current[bar.axis]
    if (!prevPage) return

    const offset = instanceRef.current.getBoundingClientRect()[bar.direction] - e[bar.client]
    const thumbClickPosition = thumbRef.current[bar.offset] - prevPage
    const thumbPositionPercentage =
      ((offset + thumbClickPosition) * 100 * offsetRatio) / instanceRef.current[bar.offset]

    // 同步更新包裹容器的滾動位置
    scrollbar.wrapElement[bar.scroll] =
      (thumbPositionPercentage * scrollbar.wrapElement[bar.scrollSize]) / 100
  }

  /**
   * 結束拖拽，清理事件與狀態
   */
  const mouseUpDocumentHandler = () => {
    setCursorDown(false)
    thumbState.current[bar.axis] = 0

    document.removeEventListener('mousemove', mouseMoveDocumentHandler)
    document.removeEventListener('mouseup', mouseUpDocumentHandler)
    document.onselectstart = null

    // 如果鼠標已經離開容器，則隱藏滾動條
    if (cursorLeave) setVisible(false)
  }

  // ---------------------------------------
  // Hover 顯示 / 離開隱藏控制
  // ---------------------------------------
  const mouseMoveScrollbarHandler = () => {
    setCursorLeave(false)
    setVisible(!!size)
  }

  const mouseLeaveScrollbarHandler = () => {
    setCursorLeave(true)
    // 拖拽中即使離開也不隱藏
    setVisible(cursorDown)
  }

  // 將 Hover 事件綁定到 Scrollbar 父容器
  useEffect(() => {
    const wrap = scrollbar?.scrollbarElement
    if (!wrap) return

    wrap.addEventListener('mousemove', mouseMoveScrollbarHandler)
    wrap.addEventListener('mouseleave', mouseLeaveScrollbarHandler)

    return () => {
      wrap.removeEventListener('mousemove', mouseMoveScrollbarHandler)
      wrap.removeEventListener('mouseleave', mouseLeaveScrollbarHandler)
    }
  }, [scrollbar, size, cursorDown])

  return (
    <FadeTransition show={always || visible} name="el-scrollbar-fade">
      <div
        ref={instanceRef}
        className={`el-scrollbar__bar ${bar.key}`}
        onMouseDown={clickTrackHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={thumbRef}
          className="el-scrollbar__thumb"
          style={thumbStyle}
          onMouseDown={clickThumbHandler}
        />
      </div>
    </FadeTransition>
  )
})

Thumb.displayName = 'Thumb'

export default Thumb
