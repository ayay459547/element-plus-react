import type { CSSProperties, ReactNode } from 'react'

export interface ElCardProps {
  header?: ReactNode
  footer?: ReactNode
  shadow?: 'always' | 'hover' | 'never'
  bodyClass?: string
  headerClass?: string
  footerClass?: string
  bodyStyle?: CSSProperties
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export type ElCardInstance = React.ReactElement<ElCardProps>
