import type { CSSProperties, ReactNode } from 'react'

export interface ElCheckboxProps {
  value?: string | number | boolean
  label?: string | number | boolean
  trueValue?: string | number
  falseValue?: string | number

  checked?: boolean

  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export type ElCheckboxInstance = React.ReactElement<ElCheckboxProps>
