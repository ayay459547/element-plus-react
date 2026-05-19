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
  content?: PopperProps['content']

  /**
   * @description whether content is treated as HTML string
   */
  rawContent?: PopperProps['rawContent']

  /**
   * @description position of Tooltip
   */
  placement?: PopperProps['placement']

  /**
   * @description list of possible positions for Tooltip popper.js
   */
  fallbackPlacements?: PopperProps['fallbackPlacements']

  /**
   * @description visibility of Tooltip
   */
  visible?: PopperProps['disabled']
  onVisible?: PopperProps['onVisible']

  /**
   * @description whether Tooltip is disabled
   */
  disabled?: PopperProps['disabled']

  /**
   * @description offset of the Tooltip
   */
  offset?: PopperProps['offset']

  /**
   * @description animation name
   */
  transition?: PopperProps['transition']

  /**
   * @description whether the tooltip content has an arrow
   */
  showArrow?: PopperProps['showArrow']

  /**
   * @description custom class name for Tooltip's popper
   */
  popperClass?: PopperProps['popperClass']

  /**
   * @description custom style name for Tooltip's popper
   */
  popperStyle?: PopperProps['popperStyle']

  /**
   * @description whether the mouse can enter the tooltip
   */
  enterable?: PopperProps['enterable']

  /**
   * @description whether tooltip content is teleported, if true it will be teleported to where append-to sets
   */
  teleported?: PopperProps['teleported']

  /**
   * @description How should the tooltip be triggered (to show), not valid in controlled mode
   */
  trigger?: PopperProps['trigger']

  /**
   * @description Indicates whether virtual triggering is enabled
   */
  virtualTriggering?: PopperProps['virtualTriggering']

  /**
   * @description Indicates the reference element to which the tooltip is attached
   */
  virtualRef?: PopperProps['virtualRef']

  /**
   * @description Tooltip triggering & reference element, only a single root element is accepted
   */
  children?: ReactNode
}

export type ElTooltipInstance = React.ReactElement<ElTooltipProps>
