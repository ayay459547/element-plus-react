import type { CSSProperties, ReactNode } from 'react'

export type SpaceSize = 'small' | 'default' | 'large' | number

export interface SpaceProps {
  /** Alignment of items (align-items) */
  alignment?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Custom class name */
  className?: string
  /** Custom style */
  style?: CSSProperties
  /** Placement direction */
  direction?: 'vertical' | 'horizontal'
  /** Spacing size */
  size?: SpaceSize | [SpaceSize, SpaceSize]
  /** Spacer between items */
  spacer?: ReactNode | string
  /** Whether to wrap items */
  wrap?: boolean
  /** Whether to fill the container */
  fill?: boolean
  /** Ratio of fill */
  fillRatio?: number
  /** Items to render */
  children?: ReactNode
}
