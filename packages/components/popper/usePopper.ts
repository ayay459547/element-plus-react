import { createContext, useContext } from 'react'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'

export type PopperContextType = {
  POPPER_INJECTION_KEY?: typeof POPPER_INJECTION_KEY

  POPPER_CONTENT_INJECTION_KEY?: typeof POPPER_CONTENT_INJECTION_KEY
}

export const PopperContext = createContext<PopperContextType>({})

export const usePopper = () => useContext(PopperContext)
