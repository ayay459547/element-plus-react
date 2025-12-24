import type { CSSProperties, ReactNode } from 'react'

export type ElAvatarProps = {
  /**
   * @description representation type to icon, more info on icon component.
   */
  icon?: string | ReactNode

  /**
   * @description avatar size.
   */
  size?: number | 'large' | 'default' | 'small'

  /**
   * @description avatar shape.
   */
  shape?: 'circle' | 'square'

  /**
   * @description the source of the image for an image avatar.
   */
  src?: string

  /**
   * @description native attribute srcset of image avatar.
   */
  srcSet?: string

  /**
   * @description native attribute alt of image avatar.
   */
  alt?: string

  /**
   * @description set how the image fit its container for an image avatar.
   */
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

  children?: ReactNode

  className?: string
  style?: CSSProperties

  onError?: (e: Event) => void
}

export type ElAvatarInstance = React.ReactElement<ElAvatarProps>
