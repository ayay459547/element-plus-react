import type { CSSProperties } from 'react'
import type { Color } from './utils/color.ts'

export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsv'

export interface ColorPickerPanelProps {
  value?: string | null
  border?: boolean
  disabled?: boolean
  showAlpha?: boolean
  colorFormat?: ColorFormat
  predefine?: string[]
  className?: string
  style?: CSSProperties
  onUpdateValue?: (value: string | null) => void
  onActiveChange?: (value: string | null) => void
}

export type ElColorPickerPanelInstance = {
  color: Color
}
