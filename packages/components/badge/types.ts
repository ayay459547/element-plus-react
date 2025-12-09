import type { CSSProperties, ReactNode } from 'react'

export type BadgeProps = {
  /**
   * @description display value.
   */
  value?: string | number

  /**
   * @description maximum value, shows {max}+ when exceeded. Only works if value is a number.
   */
  max: number

  /**
   * @description if a little dot is displayed.
   */
  isDot?: boolean

  content?: ReactNode

  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export type IconInstance = React.ReactElement<BadgeProps>
