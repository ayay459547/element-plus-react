import { useState } from 'react'
import { usePopper } from 'react-popper'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'
import type { PopperProps } from './types'
import type { PopperContextType } from './usePopper'
import { PopperContext } from './usePopper'

const ElPopper: React.FC<PopperProps> = ({ children, placement = 'top' }) => {
  const [referenceEl, setReferenceEl] = useState<HTMLElement | null>(null)
  const [popperEl, setPopperEl] = useState<HTMLElement | null>(null)
  const [arrowEl, setArrowEl] = useState<HTMLElement | null>(null)

  const { styles, attributes } = usePopper(referenceEl, popperEl, {
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowEl } },
      { name: 'offset', options: { offset: [0, 8] } }
    ]
  })

  const value: PopperContextType = {
    POPPER_INJECTION_KEY,
    POPPER_CONTENT_INJECTION_KEY,

    referenceEl,
    setReferenceEl,

    popperEl,
    setPopperEl,

    arrowEl,
    setArrowEl,

    styles,
    attributes
  }

  return <PopperContext.Provider value={value}>{children}</PopperContext.Provider>
}

export default ElPopper
