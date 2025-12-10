import type { CSSProperties, ReactNode } from 'react'

export type ElAnchorProps = {
  /**
   * @description if a little dot is displayed.
   */

  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export type ElAnchorInstance = React.ReactElement<ElAnchorProps>
