import type { CSSProperties, ReactNode } from 'react'

interface Common {
  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export interface ElContainerProps extends Common {
  /**
   * @description layout direction for child elements
   * vertical when nested with el-header or el-footer
   * horizontal otherwise
   */
  direction?: 'vertical' | 'horizontal'
}

export type ElContainerInstance = React.ReactElement<ElContainerProps>

export interface ElHeaderProps extends Common {
  /**
   * @description height of the header
   */
  height?: string
}

export type ElHeaderInstance = React.ReactElement<ElHeaderProps>

export interface ElMainProps extends Common {}

export type ElMainInstance = React.ReactElement<ElMainProps>

export interface ElFooterProps extends Common {
  /**
   * @description height of the footer
   */
  height?: string
}

export type ElFooterInstance = React.ReactElement<ElFooterProps>

export interface ElAsideProps extends Common {
  /**
   * @description width of the aside
   */
  width?: string
}

export type ElAsideInstance = React.ReactElement<ElAsideProps>
