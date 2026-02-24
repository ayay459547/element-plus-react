import type { CSSProperties, ReactNode, RefObject } from 'react'

export interface ElOverlayProps {
  ref?: RefObject<HTMLDivElement | null>

  zIndex?: number

  children?: ReactNode

  className?: string
  style?: CSSProperties

  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void
}
