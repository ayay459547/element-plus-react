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
}

export type CardInstance = React.ReactElement<ElCardProps>
