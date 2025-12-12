import type { CSSProperties } from 'react'

export type ElIconProps = {
  /**
   * @description SVG icon size, size x size
   */
  size?: number | string

  /**
   * @description SVG tag's fill attribute
   */
  color?: string

  /**
   * @description button loading
   */
  loading?: boolean

  children?: React.ReactNode

  className?: string
  style?: CSSProperties
} & React.HTMLAttributes<HTMLElement>

export type ElIconInstance = React.ReactElement<ElIconProps>
