import type { CSSProperties, ElementType, ReactElement, ReactNode } from 'react'

type AsProp<T extends React.ElementType> = {
  tag?: T
} & Omit<React.ComponentPropsWithoutRef<T>, 'type'>

export type ElButtonProps<T extends React.ElementType = 'button'> = {
  /**
   * @description button size
   */
  size?: 'large' | 'default' | 'small'

  /**
   * @description button type, when setting color, the latter prevails
   * 'text' (deprecated)
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''

  /**
   * @description determine whether it's a plain button
   */
  plain?: boolean

  /**
   * @description determine whether it's a text button
   */
  text?: boolean

  /**
   * @description determine whether the text button background color is always on
   */
  bg?: boolean

  /**
   * @description determine whether it's a link button
   */
  link?: boolean

  /**
   * @description determine whether it's a round button
   */
  round?: boolean

  /**
   * @description	determine whether it's a circle button
   */
  circle?: boolean

  /**
   * @description determine whether it's loading
   */
  loading?: boolean

  /**
   * @description customize loading icon component
   */
  loadingIcon?: string | ReactNode

  /**
   * @description disable the button
   */
  disabled?: boolean

  /**
   * @description icon component
   */
  icon?: string | ReactNode

  /**
   * @description same as native button's autofocus
   */
  autofocus?: boolean

  /**
   * @description same as native button's type
   */
  nativeType?: 'button' | 'submit' | 'reset'

  /**
   * @description automatically insert a space between two chinese characters(this will only take effect when the text length is 2 and all characters are in Chinese.)
   */
  autoInsertSpace?: boolean

  /**
   * @description 	custom button color, automatically calculate hover and active color
   */
  color?: string

  /**
   * @description dark mode, which automatically converts color to dark mode colors
   */
  dark?: boolean

  /**
   * @description custom element tag
   */
  tag?: string | ElementType

  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties

  onClick?: React.MouseEventHandler<any>
} & AsProp<T>

export type ElButtonInstance<T extends React.ElementType = 'button'> = ReactElement<
  ElButtonProps<T>
>
