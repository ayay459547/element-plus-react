import type { PopperProps } from '@ayay459547/element-plus-react/components/popper/types'
import type { ReactNode } from 'react'

export type ElTooltipProps = {
  /**
   * @description which element the tooltip CONTENT appends to
   */
  appendTo?: PopperProps['appendTo']

  /**
   * @description Tooltip theme, built-in theme: dark / light
   */
  effect?: PopperProps['effect']

  /**
   * @description display content, can be overridden by slot#content
   */
  content?: ReactNode | string

  /**
   * @description whether content is treated as HTML string
   */
  rawContent?: boolean

  /**
   * @description position of Tooltip
   */
  placement?: PopperProps['placement']

  /**
   * @description offset of the Tooltip
   */
  offset?: PopperProps['offset']

  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow?: boolean

  /**
   * @description Tooltip triggering & reference element, only a single root element is accepted
   */
  children?: ReactNode
}
