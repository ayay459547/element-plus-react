import type { ElTeleportProps } from '@ayay459547/element-plus-react/components/teleport/types'
import type { CSSProperties, ReactElement, ReactNode } from 'react'

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
  effect?: 'dark' | 'light' | string
  content?: ReactNode | string
  rawContent?: boolean
  placement?: Placement
  fallbackPlacements?: Array<Placement>
  visible?: boolean
  onVisible?: (visible: boolean) => void
  disabled?: boolean
  offset?: number
  transition?: string
  showArrow?: boolean
  popperClass?: string
  popperStyle?: CSSProperties
  enterable?: boolean
  teleported?: boolean

  children?: ReactNode
}

export type ElPopperArrowProps = {
  arrowOffset?: number
}

export type ElPopperContentProps = {
  children?: ReactNode | string
}

export type ElPopperTriggerProps = {
  children: ReactNode | ReactElement
}
