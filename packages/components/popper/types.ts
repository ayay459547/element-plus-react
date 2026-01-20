import type { ElTeleportProps } from '@ayay459547/element-plus-react/components/teleport/types'
import type { ReactElement, ReactNode } from 'react'

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export type PopperProps = {
  appendTo?: ElTeleportProps['appendTo']
  effect?: 'dark' | 'light'
  offset?: number
  placement?: Placement

  children?: ReactNode
}

export type ElPopperArrowProps = {
  arrowOffset?: number
}

export type ElPopperContentProps = {
  children?: ReactNode
}

export type ElPopperTriggerProps = {
  children: ReactNode | ReactElement
}
