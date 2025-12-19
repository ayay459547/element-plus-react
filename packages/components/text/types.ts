import type { CSSProperties, ReactElement, ReactNode } from 'react'

export type ElTextBaseProps = {
  /**
   * @description text type
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'

  /**
   * @description text size
   */
  size?: 'large' | 'default' | 'small'

  /**
   * @description render ellipsis
   */
  truncated?: boolean

  /**
   * @description maximum lines
   */
  lineClamp?: string | number

  /**
   * @description custom element tag
   */
  // tag?: ElementType

  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties
}

// T = tag 元素，例如 'span' | 'a'
export type ElTextProps<T extends React.ElementType = 'span'> = ElTextBaseProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ElTextBaseProps> & {
    /**
     * @description custom element tag
     */
    tag?: T
  }

export type ElTextInstance<T extends React.ElementType = 'button'> = ReactElement<ElTextProps<T>>
