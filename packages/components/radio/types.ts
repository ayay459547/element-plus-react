import type { CSSProperties, ReactNode } from 'react'

interface CommonProps {
  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export interface ElRadioProps extends CommonProps {}

export interface ElRadioGroupProps extends CommonProps {}
