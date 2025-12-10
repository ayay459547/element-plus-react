import type { CSSProperties } from 'react'

export type ElTagProps = {
  /**
   * type of Tag
   */
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'

  /**
   * whether Tag can be removed
   */
  closable?: boolean

  /**
   * whether to disable animations
   */
  disableTransitions?: boolean

  /**
   * whether Tag has a highlighted border
   */
  hit?: boolean

  /**
   * background color of the Tag
   */
  color?: string

  /**
   * size of Tag
   */
  size?: 'large' | 'default' | 'small' // 對應 componentSizes

  /**
   * theme of Tag
   */
  effect?: 'dark' | 'light' | 'plain'

  /**
   * whether Tag is rounded
   */
  round?: boolean

  /**
   * close event
   */
  onClose?: (evt: React.MouseEvent<HTMLSpanElement>) => void

  /**
   * click event
   */
  onClick?: (evt: React.MouseEvent<HTMLSpanElement>) => void

  children?: React.ReactNode

  className?: string
  style?: CSSProperties
}

export type ElTagInstance = React.ReactElement<ElTagProps>
