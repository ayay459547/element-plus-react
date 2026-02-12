import type { CSSProperties, ReactElement, ReactNode } from 'react'

export type ColSizeObject = {
  span?: number
  offset?: number
  pull?: number
  push?: number
}

export interface ElColBaseProps {
  /**
   * @description number of column the grid spans
   */
  span?: number

  /**
   * @description number of spacing on the left side of the grid
   */
  offset?: number

  /**
   * @description number of columns that grid moves to the right
   */
  push?: number

  /**
   * @description number of columns that grid moves to the left
   */
  pull?: number

  /**
   * @description <768px Responsive columns or column props object
   */
  xs?: number | ColSizeObject

  /**
   * @description ≥768px Responsive columns or column props object
   */
  sm?: number | ColSizeObject

  /**
   * @description ≥992px Responsive columns or column props object
   */
  md?: number | ColSizeObject

  /**
   * @description ≥1200px Responsive columns or column props object
   */
  lg?: number | ColSizeObject

  /**
   * @description ≥1920px Responsive columns or column props object
   */
  xl?: number | ColSizeObject

  children?: ReactNode

  className?: string
  style?: CSSProperties
}

// T = tag 元素，例如 'div' | 'a'
export type ElColProps<T extends React.ElementType = 'div'> = ElColBaseProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ElColBaseProps> & {
    /**
     * @description custom element tag
     */
    tag?: T
  }

export type ElColInstance<T extends React.ElementType = 'div'> = ReactElement<ElColProps<T>>
