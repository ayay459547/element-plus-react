import { createContext, useContext } from 'react'
import type { ElRadioGroupProps } from './types'

export type CheckboxGroupContextType = {
  groupValue?: ElRadioGroupProps['value']
  size?: ElRadioGroupProps['size']
  validateEvent?: ElRadioGroupProps['validateEvent']
  disabled?: ElRadioGroupProps['disabled']
  textColor?: ElRadioGroupProps['textColor']
  fill?: ElRadioGroupProps['fill']
  name?: ElRadioGroupProps['name']
  changeEvent?: ElRadioGroupProps['onChange']
}

export const RadioGroupContext = createContext<CheckboxGroupContextType>({})

export const useRadioContext = () => useContext(RadioGroupContext)
