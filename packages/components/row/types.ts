import type { CSSProperties, ReactElement } from 'react'

export interface ElRowBaseProps {
  /**
   * @description grid spacing
   */
  gutter?: number

  /**
   * @description horizontal alignment of flex layout
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

  /**
   * @description horizontal alignment of flex layout
   */
  align?: 'top' | 'middle' | 'bottom'

  /**
   * @description custom element tag
   */
  // tag?: string

  /**
   * @description	customize default content
   */
  children?: React.ReactNode

  className?: string
  style?: CSSProperties
}

// T = tag 元素，例如 'div' | 'a'
export type ElRowProps<T extends React.ElementType = 'div'> = ElRowBaseProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ElRowBaseProps> & {
    /**
     * @description custom element tag
     */
    tag?: T
  }

export type ElRowInstance<T extends React.ElementType = 'div'> = ReactElement<ElRowProps<T>>
