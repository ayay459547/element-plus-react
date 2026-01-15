import type { CSSProperties } from 'react'
import { createContext, useContext } from 'react'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'

export type PopperContextType = {
  POPPER_INJECTION_KEY?: typeof POPPER_INJECTION_KEY
  POPPER_CONTENT_INJECTION_KEY?: typeof POPPER_CONTENT_INJECTION_KEY

  referenceEl?: HTMLElement | null
  setReferenceEl?: (el: HTMLElement | null) => void

  popperEl?: HTMLElement | null
  setPopperEl?: (el: HTMLElement | null) => void

  arrowEl?: HTMLElement | null
  setArrowEl?: (el: HTMLElement | null) => void

  styles?: {
    popper?: CSSProperties
    arrow?: CSSProperties
  }
  attributes?: {
    popper?: Record<string, any>
  }
}

export const PopperContext = createContext<PopperContextType>({})

export const usePopperContext = () => useContext(PopperContext)
