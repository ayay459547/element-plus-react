import type { JSX } from 'react'

export interface BarProps {
  /** 是否總是顯示 */
  always?: boolean // Vue 有 default true，可在 React 元件內給預設值
  /** 最小尺寸 */
  minSize: number
}

import type { ScrollbarContextType } from './constants'

export interface ThumbProps {
  /** Whether the scrollbar thumb is vertical */
  vertical?: boolean

  /** Thumb size (string, e.g. "40px") */
  size?: string

  /** Thumb moving distance */
  move?: number

  /** Required ratio between content and container */
  ratio: number

  /** Whether thumb should always show */
  always?: boolean

  scrollbar?: ScrollbarContextType
}

/**
 * Expose instance type of the component (for ref)
 */
export interface ThumbRef {
  /** Example: expose a DOM element */
  el: HTMLDivElement | null
}

import type { CSSProperties, ReactNode } from 'react'

// Scrollbar direction
export type ScrollbarDirection = 'top' | 'bottom' | 'left' | 'right'

// Scrollbar props
export interface ElScrollbarProps {
  /** trigger distance(px) */
  distance?: number
  /** height of scrollbar */
  height?: string | number
  /** max height of scrollbar */
  maxHeight?: string | number
  /** whether to use the native scrollbar */
  native?: boolean
  /** style of wrap */
  wrapStyle?: CSSProperties | CSSProperties[] | string
  /** class of wrap */
  wrapClass?: string | string[]
  /** class of view */
  viewClass?: string | string[]
  /** style of view */
  viewStyle?: CSSProperties | CSSProperties[] | string
  /** do not respond to container size changes, optimize performance */
  noresize?: boolean
  /** element tag of the view */
  tag?: keyof JSX.IntrinsicElements
  /** always show */
  always?: boolean
  /** minimum size of scrollbar */
  minSize?: number
  /** wrap tabindex */
  tabindex?: string | number
  /** id of view */
  id?: string
  /** role of view */
  role?: string
  /** aria props */
  ariaLabel?: string
  ariaOrientation?: string
  /** children content */
  children?: ReactNode
  /** Scroll event callback */
  onScroll?: (scroll: { scrollTop: number; scrollLeft: number }) => void
  /** End reached callback */
  onEndReached?: (direction: ScrollbarDirection) => void
}

// Scrollbar instance exposed methods (like Vue's defineExpose)
export interface ElScrollbarInstance {
  handleScroll: (wrap: HTMLDivElement) => void
  update: () => void
  // 其他可選的方法
}
