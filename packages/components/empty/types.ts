import type { CSSProperties, ReactNode } from 'react'

export interface ElEmptyProps {
  /**
   * @description image URL of empty
   * @description content as image
   */
  image?: string | ReactNode

  /**
   * @description content as image
   */
  imageSize?: number

  /**
   * @description content as bottom content
   */
  children?: ReactNode

  /**
   * @description content as description
   */
  description?: string | ReactNode

  className?: string
  style?: CSSProperties
}

export type ElEmptyInstance = React.ReactElement<ElEmptyProps>
