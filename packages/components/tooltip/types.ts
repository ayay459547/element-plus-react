import type { ReactNode } from 'react'

export type ElTooltipProps = {
  /**
   * @description Tooltip triggering & reference element, only a single root element is accepted
   */
  children?: ReactNode

  /**
   * @description customize content
   */
  content?: ReactNode
}
