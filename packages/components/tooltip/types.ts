import type { ReactNode } from 'react'

export type ElTooltipProps = {
  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow?: boolean

  /**
   * @description Tooltip triggering & reference element, only a single root element is accepted
   */
  children?: ReactNode

  /**
   * @description customize content
   */
  content?: ReactNode
}
