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
  children?: ReactNode
  placement?: Placement
}

export type ElPopperArrowProps = {
  arrowOffset?: number
}

export type ElPopperContentProps = {
  children?: ReactNode
  teleportTo?: HTMLElement
}

export type ElPopperTriggerProps = {
  children: ReactNode | ReactElement
}
