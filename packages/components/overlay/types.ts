import type { CSSProperties, ReactNode } from 'react'

export interface ElOverlayProps {
  children?: ReactNode

  className?: string
  style?: CSSProperties

  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void
}
