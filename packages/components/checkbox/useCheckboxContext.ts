import { createContext, useContext } from 'react'
import type { ElCheckboxGroupBaseProps } from './types'

export type CheckboxGroupContextType = {
  groupValue?: ElCheckboxGroupBaseProps['value']
  size?: ElCheckboxGroupBaseProps['size']
  min?: ElCheckboxGroupBaseProps['min']
  max?: ElCheckboxGroupBaseProps['max']
  validateEvent?: ElCheckboxGroupBaseProps['validateEvent']
  disabled?: ElCheckboxGroupBaseProps['disabled']
  textColor?: ElCheckboxGroupBaseProps['textColor']
  fill?: ElCheckboxGroupBaseProps['fill']
  changeEvent?: ElCheckboxGroupBaseProps['onChange']
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextType>({})

export const useCheckboxContext = () => useContext(CheckboxGroupContext)
