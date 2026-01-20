import type {
  FloatingArrowProps,
  NarrowedElement,
  ReferenceType,
  UseInteractionsReturn
} from '@floating-ui/react'
import type { CSSProperties, Dispatch, RefObject, SetStateAction } from 'react'
import { createContext, useContext } from 'react'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'
import type { PopperProps } from './types'

export type PopperContextType = {
  POPPER_INJECTION_KEY: typeof POPPER_INJECTION_KEY
  POPPER_CONTENT_INJECTION_KEY: typeof POPPER_CONTENT_INJECTION_KEY

  isOpen: boolean
  domReference: RefObject<NarrowedElement<ReferenceType> | null>
  setReference: (node: ReferenceType | null) => void
  setFloating: (node: HTMLElement | null) => void
  floatingStyles: CSSProperties
  getReferenceProps: UseInteractionsReturn['getReferenceProps']
  getFloatingProps: UseInteractionsReturn['getFloatingProps']

  setArrowElement: Dispatch<SetStateAction<SVGSVGElement | null>>
  context: FloatingArrowProps['context'] | null

  // props
  appendTo?: PopperProps['appendTo']
  effect?: PopperProps['effect']
}

export const PopperContext = createContext<PopperContextType>({
  POPPER_INJECTION_KEY,
  POPPER_CONTENT_INJECTION_KEY,

  isOpen: false,
  domReference: { current: null },
  setReference: (node) => {
    console.log('setReference', node)
  },
  setFloating: (node) => {
    console.log('setFloating', node)
  },
  floatingStyles: {},
  getReferenceProps: () => ({}),
  getFloatingProps: () => ({}),

  setArrowElement: () => {},
  context: null,

  effect: 'dark'
})

export const usePopperContext = () => useContext(PopperContext)
