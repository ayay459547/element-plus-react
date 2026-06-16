import type { ReactNode, CSSProperties } from 'react'

/** 分割器方向 */
export type SplitterDirection = 'horizontal' | 'vertical'

export interface SplitterProps {
  /** 分割方向，可選 'horizontal' 或 'vertical' */
  direction?: SplitterDirection
  /** 是否延遲更新大小，僅在拖拽結束時觸發 */
  lazy?: boolean
  /** 自定義類名 */
  className?: string
  /** 自定義樣式 */
  style?: CSSProperties
  /** 面板子元素，應為 ElSplitterPanel */
  children?: ReactNode
  /** 拖拽結束時觸發 */
  onResizeEnd?: (sizes: (string | number)[]) => void
  /** 拖拽開始時觸發 */
  onResizeStart?: () => void
  /** 拖拽中觸發 */
  onResize?: (sizes: (string | number)[]) => void
}

export interface SplitterPanelProps {
  /** 面板大小，支持像素或百分比 */
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
}

export interface ElSplitterInstance {
  /** 獲取所有面板的大小 */
  getSizes: () => (string | number)[]
  /** 設置面板的大小 */
  setSizes: (sizes: (string | number)[]) => void
}

export interface ElSplitterPanelInstance {
  // 實例方法預留
}
