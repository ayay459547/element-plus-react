import type { ReactNode, CSSProperties } from 'react'

export interface WatermarkFont {
  color?: string
  fontSize?: number | string
  fontWeight?: 'normal' | 'italic' | 'oblique' | 'bold' | 'bolder' | 'lighter' | number
  fontFamily?: string
  fontStyle?: 'normal' | 'italic' | 'oblique'
}

export interface WatermarkProps {
  /** 寬度 */
  width?: number
  /** 高度 */
  height?: number
  /** 水印旋轉角度 */
  rotate?: number
  /** 水印層級 */
  zIndex?: number
  /** 水印圖片源，優先於 content */
  image?: string
  /** 水印文字內容 */
  content?: string | string[]
  /** 水印字體設置 */
  font?: WatermarkFont
  /** 水印之間的間距 */
  gap?: [number, number]
  /** 水印相對於容器的偏移量 */
  offset?: [number, number]
  /** 自定義類名 */
  className?: string
  /** 自定義樣式 */
  style?: CSSProperties
  /** 子元素 */
  children?: ReactNode
}

export interface ElWatermarkInstance {
  // 實例方法預留
}
