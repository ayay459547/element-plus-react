import type { ElTooltipProps } from '@ayay459547/element-plus-react/components/tooltip/types'
import type { CSSProperties, ReactNode } from 'react'

export type ElPopoverProps = Omit<ElTooltipProps, 'content'> & {
  /**
   * @description Title of popover
   */
  title?: string

  /**
   * @description Content of popover, can be overridden by slot#content
   */
  content?: string | ReactNode

  /**
   * @description width of popover, default is 150px
   */
  width?: string | number

  /**
   * @description popover container style
   */
  popperStyle?: CSSProperties

  /**
   * @description popover container custom class
   */
  popperClass?: string

  /**
   * @description whether popover is teleported to the body
   */
  teleported?: boolean

  /**
   * @description whether popover is persistent
   */
  persistent?: boolean

  /**
   * @description whether to use plain style
   */
  plain?: boolean
}

export type ElPopoverInstance = {
  /**
   * @description hide popover
   */
  hide: () => void
}
