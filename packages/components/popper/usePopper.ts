import type { ReferenceType, UseInteractionsReturn } from '@floating-ui/react'
import type { CSSProperties } from 'react'
import { createContext, useContext } from 'react'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'

export type PopperContextType = {
  POPPER_INJECTION_KEY: typeof POPPER_INJECTION_KEY
  POPPER_CONTENT_INJECTION_KEY: typeof POPPER_CONTENT_INJECTION_KEY

  isOpen: boolean
  setReference: (node: ReferenceType | null) => void
  setFloating: (node: HTMLElement | null) => void
  floatingStyles: CSSProperties
  getReferenceProps: UseInteractionsReturn['getReferenceProps']
  getFloatingProps: UseInteractionsReturn['getFloatingProps']
}

export const PopperContext = createContext<PopperContextType>({
  POPPER_INJECTION_KEY,
  POPPER_CONTENT_INJECTION_KEY,

  isOpen: false,
  setReference: (node) => {
    console.log('setReference', node)
  },
  setFloating: (node) => {
    console.log('setFloating', node)
  },
  floatingStyles: {},
  getReferenceProps: () => ({}),
  getFloatingProps: () => ({})
})

export const usePopperContext = () => useContext(PopperContext)
