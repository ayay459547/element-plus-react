// import type { CSSProperties } from 'react'

export type TransitionProps = {
  inProp: boolean
  name?: string // 例如 'el-tag-zoom-in-center'
  appear?: boolean
  duration?: number
  children: React.ReactElement
} & React.HTMLAttributes<HTMLElement>

export type IconInstance = React.ReactElement<TransitionProps>
