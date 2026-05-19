import React, { type CSSProperties, useEffect, useRef, useState } from 'react'
import type { ThumbProps, ThumbRef } from './types'
import { BAR_MAP, renderThumbStyle } from './util'

// 簡易 fade 動畫（替代 Vue <transition>）
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

// ------------------------------------------------
// Thumb Component
// ------------------------------------------------
export const Thumb = React.forwardRef<ThumbRef, ThumbProps>((props, ref) => {
  const {
    vertical,
    size,
    move,
    ratio,
    always,
    scrollbar // 注意：React 版需從 props 傳入
  } = props

  const instanceRef = useRef<HTMLDivElement | null>(null)
  const thumbRef = useRef<HTMLDivElement | null>(null)

  // expose ref
  React.useImperativeHandle(ref, () => ({
    el: instanceRef.current
  }))

  // 狀態
  const [visible, setVisible] = useState(false)
  const [cursorDown, setCursorDown] = useState(false)
  const [cursorLeave, setCursorLeave] = useState(false)
  const thumbState = useRef<{ X?: number; Y?: number }>({})

  // ---------------------------------------
  // bar 設定 (等同 Vue BAR_MAP)
  // ---------------------------------------
  const bar = vertical ? BAR_MAP.vertical : BAR_MAP.horizontal

  // thumb style
  const thumbStyle: CSSProperties = renderThumbStyle({
    size,
    move,
    bar
  })

  // offsetRatio 計算
  const offsetRatio = (() => {
    if (!instanceRef.current || !thumbRef.current || !scrollbar?.wrapElement) return 1

    return (
      instanceRef.current[bar.offset] ** 2 /
      scrollbar.wrapElement[bar.scrollSize] /
      ratio /
      thumbRef.current[bar.offset]
    )
  })()

  // ---------------------------------------
  // click Thumb
  // ---------------------------------------
  const clickThumbHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (e.ctrlKey || [1, 2].includes(e.button)) return

    window.getSelection()?.removeAllRanges()
    startDrag(e)

    const el = e.currentTarget as HTMLDivElement
    thumbState.current[bar.axis] =
      el[bar.offset] - (e[bar.client] - el.getBoundingClientRect()[bar.direction])
  }

  // ---------------------------------------
  // click Track
  // ---------------------------------------
  const clickTrackHandler = (e: React.MouseEvent) => {
    if (!thumbRef.current || !instanceRef.current || !scrollbar || !scrollbar.wrapElement) return

    const offset = Math.abs(
      (e.currentTarget as HTMLElement).getBoundingClientRect()[bar.direction] - e[bar.client]
    )

    const thumbHalf = thumbRef.current[bar.offset] / 2
    const thumbPositionPercentage =
      ((offset - thumbHalf) * 100 * offsetRatio) / instanceRef.current[bar.offset]

    scrollbar.wrapElement[bar.scroll] =
      (thumbPositionPercentage * scrollbar.wrapElement[bar.scrollSize]) / 100
  }

  // ---------------------------------------
  // Drag Start
  // ---------------------------------------
  const startDrag = (e: MouseEvent | React.MouseEvent) => {
    e.stopPropagation()
    setCursorDown(true)

    document.addEventListener('mousemove', mouseMoveDocumentHandler)
    document.addEventListener('mouseup', mouseUpDocumentHandler)

    document.onselectstart = () => false
  }

  // ---------------------------------------
  // Drag Move
  // ---------------------------------------
  const mouseMoveDocumentHandler = (e: MouseEvent) => {
    if (!instanceRef.current || !thumbRef.current || !scrollbar || !scrollbar.wrapElement) return
    if (!cursorDown) return

    const prevPage = thumbState.current[bar.axis]
    if (!prevPage) return

    const offset = instanceRef.current.getBoundingClientRect()[bar.direction] - e[bar.client]
    const thumbClickPosition = thumbRef.current[bar.offset] - prevPage
    const thumbPositionPercentage =
      ((offset + thumbClickPosition) * 100 * offsetRatio) / instanceRef.current[bar.offset]

    scrollbar.wrapElement[bar.scroll] =
      (thumbPositionPercentage * scrollbar.wrapElement[bar.scrollSize]) / 100
  }

  // ---------------------------------------
  // Drag End
  // ---------------------------------------
  const mouseUpDocumentHandler = () => {
    setCursorDown(false)
    thumbState.current[bar.axis] = 0

    document.removeEventListener('mousemove', mouseMoveDocumentHandler)
    document.removeEventListener('mouseup', mouseUpDocumentHandler)
    document.onselectstart = null

    if (cursorLeave) setVisible(false)
  }

  // ---------------------------------------
  // Hover 顯示 / 離開隱藏
  // ---------------------------------------
  const mouseMoveScrollbarHandler = () => {
    setCursorLeave(false)
    setVisible(!!size)
  }

  const mouseLeaveScrollbarHandler = () => {
    setCursorLeave(true)
    setVisible(cursorDown)
  }

  useEffect(() => {
    const wrap = scrollbar?.scrollbarElement
    if (!wrap) return

    wrap.addEventListener('mousemove', mouseMoveScrollbarHandler)
    wrap.addEventListener('mouseleave', mouseLeaveScrollbarHandler)

    return () => {
      wrap.removeEventListener('mousemove', mouseMoveScrollbarHandler)
      wrap.removeEventListener('mouseleave', mouseLeaveScrollbarHandler)
    }
  }, [scrollbar])

  // ---------------------------------------
  // Render
  // ---------------------------------------
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
