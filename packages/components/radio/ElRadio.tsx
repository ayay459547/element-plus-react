import { forwardRef } from 'react'
import type { ElRadioProps } from './types'

const COMPONENT_NAME = 'ElRadio'

const ElRadio = forwardRef<HTMLInputElement, ElRadioProps>((props, ref) => {
  return <label></label>
})

ElRadio.displayName = COMPONENT_NAME

export default ElRadio
