import type { CSSProperties } from 'react'

export type ButtonProps = {
  /**
   * @description SVG icon size, size x size
   */
  size?: number | string

  /**
   * @description SVG tag's fill attribute
   */
  color?: string

  children?: React.ReactNode

  className?: string
  style?: CSSProperties
} & React.HTMLAttributes<HTMLElement>

export type ButtonInstance = React.ReactElement<ButtonProps>
