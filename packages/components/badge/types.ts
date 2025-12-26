import type { CSSProperties, ReactNode } from 'react'

export type ElBadgeProps = {
  /**
   * @description display value.
   */
  value?: string | number

  /**
   * @description maximum value, shows {max}+ when exceeded. Only works if value is a number.
   */
  max?: number

  /**
   * @description if a little dot is displayed.
   */
  isDot?: boolean

  /**
   * @description	hidden badge.
   */
  hidden?: boolean

  /**
   * @description	badge type.
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'

  /**
   * @description Whether to show badge when value is zero.
   */
  showZero?: boolean

  /**
   * @description background color of the dot
   */
  color?: string

  /**
   * @description offset of badge
   */
  offset?: [number, number]

  /**
   * @description custom style of badge
   */
  badgeStyle?: CSSProperties

  /**
   * @description custom class of badge
   */
  badgeClass?: string

  /**
   * @description customize badge content
   */
  content?: ReactNode

  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export type ElBadgeInstance = React.ReactElement<ElBadgeProps>
