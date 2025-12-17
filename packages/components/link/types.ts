import type { CSSProperties, ReactElement, ReactNode } from 'react'

export type ElLinkProps = {
  /**
   * @description type
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

  /**
   * @description	when underlines should appear
   */
  underline?: 'always' | 'hover' | 'never' | boolean

  /**
   * @description whether the component is disabled
   */
  disabled?: boolean

  /**
   * @description same as native hyperlink's href
   */
  href?: string

  /**
   * @description same as native hyperlink's target
   */
  target?: '_blank' | '_parent' | '_self' | '_top'

  /**
   * @description customize icon component
   */
  icon?: ReactNode

  /**
   * @description customize default content
   */
  children?: ReactNode

  /**
   * @description customize icon component
   */
  iconSlot?: ReactNode

  className?: string
  style?: CSSProperties
}

export type ElTagInstance = ReactElement<ElLinkProps>
