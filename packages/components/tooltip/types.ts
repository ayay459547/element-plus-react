import type { ElTeleportProps } from '@ayay459547/element-plus-react/components/teleport/types'
import type { ReactNode } from 'react'

export type ElTooltipProps = {
  /**
   * @description which element the tooltip CONTENT appends to
   */
  appendTo?: ElTeleportProps['appendTo']

  effect?: 'dark' | 'light'

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
