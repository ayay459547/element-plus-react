import type { CSSProperties, ReactNode } from 'react'

export interface ElCardProps {
  /**
   * @description CSS style of card body
   */
  bodyStyle?: CSSProperties

  /**
   * @description custom class name of card header
   */
  headerClass?: string

  /**
   * @description custom class name of card body
   */
  bodyClass?: string

  /**
   * @description custom class name of card footer
   */
  footerClass?: string

  /**
   * @description when to show card shadows
   */
  shadow?: 'always' | 'hover' | 'never'

  /**
   * @description customize default content
   */
  children?: ReactNode

  /**
   * @description content of the Card header
   */
  header?: ReactNode

  /**
   * @description content of the Card footer
   */
  footer?: ReactNode

  className?: string
  style?: CSSProperties
}

export type ElCardInstance = React.ReactElement<ElCardProps>
