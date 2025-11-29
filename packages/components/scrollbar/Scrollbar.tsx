import { addUnit } from '@ayay/element-plus-react/utils/dom/style'
import type { CSSProperties, JSX, ReactNode, Ref } from 'react'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Bar } from './Bar'
import { ScrollbarContext } from './constants'

export type ScrollbarDirection = 'top' | 'bottom' | 'left' | 'right'

export interface ScrollbarProps {
  distance?: number
  height?: string | number
  maxHeight?: string | number
  native?: boolean
  wrapStyle?: CSSProperties
  wrapClass?: string | string[]
  viewClass?: string | string[]
  viewStyle?: CSSProperties
  noresize?: boolean
  tag?: keyof JSX.IntrinsicElements
  always?: boolean
  minSize?: number
  tabindex?: string | number
  id?: string
  role?: string
  ariaLabel?: string
  ariaOrientation?: string
  children?: ReactNode
  onScroll?: (pos: { scrollTop: number; scrollLeft: number }) => void
  onEndReached?: (direction: ScrollbarDirection) => void
}

export interface ScrollbarInstance {
  wrapRef: HTMLDivElement | null
  update: () => void
  scrollTo: (x: number, y?: number) => void
  setScrollTop: (value: number) => void
  setScrollLeft: (value: number) => void
  handleScroll: () => void
}

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
  const barRef = useRef<any>(null) // Bar instance

  const [wrapScrollTop, setWrapScrollTop] = useState(0)
  const [wrapScrollLeft, setWrapScrollLeft] = useState(0)
  const [direction, setDirection] = useState<ScrollbarDirection>('top')
  const distanceScrollState = useRef<Record<ScrollbarDirection, boolean>>({
    top: false,
    bottom: false,
    left: false,
    right: false
  })

  const handleScroll = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    barRef.current?.handleScroll?.(wrap)

    const prevTop = wrapScrollTop
    const prevLeft = wrapScrollLeft
    const scrollTop = wrap.scrollTop
    const scrollLeft = wrap.scrollLeft

    setWrapScrollTop(scrollTop)
    setWrapScrollLeft(scrollLeft)

    const arrivedStates: Record<ScrollbarDirection, boolean> = {
      bottom: scrollTop + wrap.clientHeight >= wrap.scrollHeight - distance,
      top: scrollTop <= distance && prevTop !== 0,
      right:
        scrollLeft + wrap.clientWidth >= wrap.scrollWidth - distance && prevLeft !== scrollLeft,
      left: scrollLeft <= distance && prevLeft !== 0
    }

    onScroll?.({ scrollTop, scrollLeft })

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

    if (arrivedStates[currentDirection] && !distanceScrollState.current[currentDirection]) {
      distanceScrollState.current[currentDirection] = true
      onEndReached?.(currentDirection)
    }

    if (!arrivedStates[opposite] && distanceScrollState.current[opposite]) {
      distanceScrollState.current[opposite] = false
    }
  }, [wrapScrollTop, wrapScrollLeft, distance, direction, onScroll, onEndReached])

  const scrollTo = useCallback((x: number, y?: number) => {
    if (!wrapRef.current) return
    if (typeof x === 'number' && typeof y === 'number') {
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

  const update = useCallback(() => {
    barRef.current?.update?.()
    Object.keys(distanceScrollState.current).forEach((key) => {
      distanceScrollState.current[key as ScrollbarDirection] = false
    })
  }, [])

  // provide context
  const contextValue = {
    scrollbarElement: scrollbarRef.current,
    wrapElement: wrapRef.current
  }

  useImperativeHandle(ref, () => ({
    wrapRef: wrapRef.current,
    update,
    scrollTo,
    setScrollTop,
    setScrollLeft,
    handleScroll
  }))

  // optional: resize observer
  useEffect(() => {
    if (noresize) return
    // 你可以用 ResizeObserver 或 window resize
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
            id={id}
            ref={resizeRef as Ref<any>}
            className={
              viewClass ? ['el-scrollbar__view', viewClass].join(' ') : 'el-scrollbar__view'
            }
            style={viewStyle}
            role={role}
            aria-label={ariaLabel}
            aria-orientation={ariaOrientation}
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
