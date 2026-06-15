import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import type { CSSProperties, Ref } from 'react'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Bar } from './Bar'
import { ScrollbarContext } from './constants'
import type { ScrollbarProps, ScrollbarInstance, ScrollbarDirection, BarInstance } from './types'

/**
 * Scrollbar 組件
 * 提供自定義樣式的滾動條，兼容原生滾動行為
 */
export const Scrollbar = forwardRef<ScrollbarInstance, ScrollbarProps>((props, ref) => {
  const {
    distance = 0,
    height,
    maxHeight,
    native = false,
    wrapStyle,
    wrapClass,
    viewClass,
    viewStyle,
    noresize,
    tag: Tag = 'div',
    always,
    minSize = 20,
    tabindex,
    id,
    role,
    ariaLabel,
    ariaOrientation,
    children,
    onScroll,
    onEndReached
  } = props

  const scrollbarRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const resizeRef = useRef<HTMLElement>(null)
  const barRef = useRef<BarInstance>(null)

  // 記錄滾動位置
  const [wrapScrollTop, setWrapScrollTop] = useState(0)
  const [wrapScrollLeft, setWrapScrollLeft] = useState(0)
  // 當前捲動方向
  const [direction, setDirection] = useState<ScrollbarDirection>('top')
  // 記錄是否已觸發過邊界到達事件
  const distanceScrollState = useRef<Record<ScrollbarDirection, boolean>>({
    top: false,
    bottom: false,
    left: false,
    right: false
  })

  /**
   * 處理滾動事件
   * 同步更新自定義滾動條的位置，並觸發邊界到達事件
   */
  const handleScroll = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    // 通知 Bar 組件更新 Thumb 位置
    barRef.current?.handleScroll?.(wrap)

    const prevTop = wrapScrollTop
    const prevLeft = wrapScrollLeft
    const scrollTop = wrap.scrollTop
    const scrollLeft = wrap.scrollLeft

    setWrapScrollTop(scrollTop)
    setWrapScrollLeft(scrollLeft)

    // 檢查是否到達邊界
    const arrivedStates: Record<ScrollbarDirection, boolean> = {
      bottom: scrollTop + wrap.clientHeight >= wrap.scrollHeight - distance,
      top: scrollTop <= distance && prevTop !== 0,
      right:
        scrollLeft + wrap.clientWidth >= wrap.scrollWidth - distance && prevLeft !== scrollLeft,
      left: scrollLeft <= distance && prevLeft !== 0
    }

    onScroll?.({ scrollTop, scrollLeft })

    // 更新當前捲動方向
    if (prevTop !== scrollTop) {
      setDirection(scrollTop > prevTop ? 'bottom' : 'top')
    }
    if (prevLeft !== scrollLeft) {
      setDirection(scrollLeft > prevLeft ? 'right' : 'left')
    }

    const currentDirection = direction
    const DIRECTION_PAIRS: Record<ScrollbarDirection, ScrollbarDirection> = {
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left'
    }

    const opposite = DIRECTION_PAIRS[currentDirection]

    // 觸發邊界到達事件
    if (arrivedStates[currentDirection] && !distanceScrollState.current[currentDirection]) {
      distanceScrollState.current[currentDirection] = true
      onEndReached?.(currentDirection)
    }

    // 重置相反方向的狀態
    if (!arrivedStates[opposite] && distanceScrollState.current[opposite]) {
      distanceScrollState.current[opposite] = false
    }
  }, [wrapScrollTop, wrapScrollLeft, distance, direction, onScroll, onEndReached])

  /**
   * 平滑捲動到指定位置
   */
  const scrollTo = useCallback((x: number | ScrollToOptions, y?: number) => {
    if (!wrapRef.current) return
    if (typeof x === 'object') {
      wrapRef.current.scrollTo(x)
    } else if (typeof x === 'number' && typeof y === 'number') {
      wrapRef.current.scrollTo(x, y)
    }
  }, [])

  const setScrollTop = useCallback((value: number) => {
    if (!wrapRef.current) return
    wrapRef.current.scrollTop = value
  }, [])

  const setScrollLeft = useCallback((value: number) => {
    if (!wrapRef.current) return
    wrapRef.current.scrollLeft = value
  }, [])

  /**
   * 更新滾動條狀態（通常在內容大小變化後調用）
   */
  const update = useCallback(() => {
    barRef.current?.update?.()
    // 重置邊界觸發狀態
    Object.keys(distanceScrollState.current).forEach((key) => {
      distanceScrollState.current[key as ScrollbarDirection] = false
    })
  }, [])

  const contextValue = {
    scrollbarElement: scrollbarRef.current,
    wrapElement: wrapRef.current
  }

  // 暴露方法給外部
  useImperativeHandle(ref, () => ({
    wrapRef: wrapRef.current,
    update,
    scrollTo,
    setScrollTop,
    setScrollLeft,
    handleScroll
  }))

  // 監聽窗口大小變化以自動更新滾動條
  useEffect(() => {
    if (noresize) return
    const handleResize = () => update()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [noresize, update])

  const computedWrapStyle: CSSProperties = {}
  if (height) computedWrapStyle.height = addUnit(height)
  if (maxHeight) computedWrapStyle.maxHeight = addUnit(maxHeight)

  return (
    <ScrollbarContext.Provider value={contextValue}>
      <div ref={scrollbarRef} className="el-scrollbar">
        <div
          ref={wrapRef}
          className={wrapClass ? [wrapClass, 'el-scrollbar__wrap'].join(' ') : 'el-scrollbar__wrap'}
          style={{ ...wrapStyle, ...computedWrapStyle }}
          tabIndex={typeof tabindex === 'string' ? parseInt(tabindex) : tabindex}
          onScroll={handleScroll}
        >
          <Tag
            {...({
              id,
              ref: resizeRef as Ref<any>,
              className: viewClass
                ? ['el-scrollbar__view', viewClass].join(' ')
                : 'el-scrollbar__view',
              style: viewStyle,
              role,
              'aria-label': ariaLabel,
              'aria-orientation': ariaOrientation
            } as any)}
          >
            {children}
          </Tag>
        </div>
        {!native && <Bar ref={barRef} always={always} minSize={minSize} />}
      </div>
    </ScrollbarContext.Provider>
  )
})

export default Scrollbar
