import type { ReactNode, CSSProperties } from 'react'

/** 分割器方向 */
export type SplitterDirection = 'horizontal' | 'vertical'

export interface SplitterProps {
  /** 分割方向，可選 'horizontal' 或 'vertical' */
  direction?: SplitterDirection
  /** 是否延遲更新，為 true 時僅在拖拽結束後更新大小 */
  lazy?: boolean
  /** 自定義類名 */
  className?: string
  /** 自定義樣式 */
  style?: CSSProperties
  /** 面板子元素，應為 ElSplitterPanel */
  children?: ReactNode
}

export interface SplitterPanelProps {
  /** 面板初始大小，支持像素或百分比 */
  size?: string | number
  /** 面板最小尺寸 */
  min?: string | number
  /** 面板最大尺寸 */
  max?: string | number
  /** 是否可調整大小 */
  resizable?: boolean
  /** 是否可折疊 */
  collapsible?: boolean
  /** 自定義類名 */
  className?: string
  /** 自定義樣式 */
  style?: CSSProperties
  /** 面板內容 */
  children?: ReactNode
  /** 大小更新時的回調 */
  onUpdateSize?: (size: string | number) => void
}

export interface ElSplitterInstance {
  // 實例方法預留
}

export interface ElSplitterPanelInstance {
  // 實例方法預留
}
