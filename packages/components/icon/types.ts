import type { CSSProperties } from 'react'

export type IconProps = {
  /**
   * @description SVG icon size, size x size
   */
  size?: number | string

  /**
   * @description SVG tag's fill attribute
   */
  color?: string

  className?: string
  style?: CSSProperties
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

export type IconInstance = React.ReactElement<IconProps>
