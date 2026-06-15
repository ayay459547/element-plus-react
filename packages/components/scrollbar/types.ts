import type { CSSProperties, JSX, ReactNode } from 'react'
import type { ScrollbarContextType } from './constants'

/** 捲動方向類型 */
export type ScrollbarDirection = 'top' | 'bottom' | 'left' | 'right'

/** Bar 組件屬性 */
export interface BarProps {
  /** 滾動條是否一直顯示 */
  always?: boolean
  /** 滾動條最小尺寸 */
  minSize: number
}

/** Bar 組件實例 */
export interface BarInstance {
  /** 處理捲動事件 */
  handleScroll: (wrap: HTMLDivElement) => void
  /** 更新滾動條狀態 */
  update: () => void
}

/** Thumb 組件屬性 */
export interface ThumbProps {
  /** 是否為垂直滾動條 */
  vertical?: boolean
  /** 滾動條尺寸 */
  size?: string
  /** 滾動條移動距離百分比 */
  move?: number
  /** 滾動比率 */
  ratio: number
  /** 是否一直顯示 */
  always?: boolean
  /** Scrollbar 上下文信息 */
  scrollbar?: ScrollbarContextType | null
}

/** Thumb 組件實例 */
export interface ThumbRef {
  /** 滾動條 DOM 元素 */
  el: HTMLDivElement | null
}

/** Scrollbar 組件屬性 */
export interface ScrollbarProps {
  /** 距離底部的觸發距離，單位 px */
  distance?: number
  /** 捲動區域高度 */
  height?: string | number
  /** 捲動區域最大高度 */
  maxHeight?: string | number
  /** 是否使用原生滾動條 */
  native?: boolean
  /** 包裹層樣式 */
  wrapStyle?: CSSProperties
  /** 包裹層類名 */
  wrapClass?: string | string[]
  /** 內容層類名 */
  viewClass?: string | string[]
  /** 內容層樣式 */
  viewStyle?: CSSProperties
  /** 是否不監聽容器大小變化 */
  noresize?: boolean
  /** 內容層標籤 */
  tag?: keyof JSX.IntrinsicElements
  /** 滾動條是否一直顯示 */
  always?: boolean
  /** 滾動條最小尺寸 */
  minSize?: number
  /** tabindex 屬性 */
  tabindex?: string | number
  /** id 屬性 */
  id?: string
  /** role 屬性 */
  role?: string
  /** aria-label 屬性 */
  ariaLabel?: string
  /** aria-orientation 屬性 */
  ariaOrientation?: 'horizontal' | 'vertical'
  /** 子元素內容 */
  children?: ReactNode
  /** 捲動時的回調 */
  onScroll?: (pos: { scrollTop: number; scrollLeft: number }) => void
  /** 捲動到底部/頂部/左側/右側時的回調 */
  onEndReached?: (direction: ScrollbarDirection) => void
}

/** Scrollbar 組件實例 */
export interface ScrollbarInstance {
  /** 包裹層 DOM 引用 */
  wrapRef: HTMLDivElement | null
  /** 手動更新滾動條狀態 */
  update: () => void
  /** 捲動到指定位置 */
  scrollTo: (x: number | ScrollToOptions, y?: number) => void
  /** 設置垂直捲動距離 */
  setScrollTop: (value: number) => void
  /** 設置水平捲動距離 */
  setScrollLeft: (value: number) => void
  /** 處理捲動事件（內部使用） */
  handleScroll: () => void
}
