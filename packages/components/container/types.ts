import type { CSSProperties, ReactNode } from 'react'

interface CommonProps {
  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export interface ElContainerProps extends CommonProps {
  /**
   * @description layout direction for child elements
   * vertical when nested with el-header or el-footer
   * horizontal otherwise
   */
  direction?: 'vertical' | 'horizontal'
}

export type ElContainerInstance = React.ReactElement<ElContainerProps>

export interface ElHeaderProps extends CommonProps {
  /**
   * @description height of the header
   */
  height?: string
}

export type ElHeaderInstance = React.ReactElement<ElHeaderProps>

export interface ElMainProps extends CommonProps {}

export type ElMainInstance = React.ReactElement<ElMainProps>

export interface ElFooterProps extends CommonProps {
  /**
   * @description height of the footer
   */
  height?: string
}

export type ElFooterInstance = React.ReactElement<ElFooterProps>

export interface ElAsideProps extends CommonProps {
  /**
   * @description width of the aside
   */
  width?: string
}

export type ElAsideInstance = React.ReactElement<ElAsideProps>
