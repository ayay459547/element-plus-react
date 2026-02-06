import { forwardRef } from 'react'
import './ElRadio.scss'
import type { ElRadioProps } from './types'

const COMPONENT_NAME = 'ElRadioButton'

const ElRadioButton = forwardRef<HTMLInputElement, ElRadioProps>((props, ref) => {
  return <label></label>
})

ElRadioButton.displayName = COMPONENT_NAME

export default ElRadioButton
