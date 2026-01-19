import { useFloating, useHover, useInteractions } from '@floating-ui/react'
import { useState } from 'react'
// import { usePopper } from 'react-popper'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'

import type { PopperProps } from './types'
import type { PopperContextType } from './usePopper'
import { PopperContext } from './usePopper'

const ElPopper: React.FC<PopperProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen
  })
  const hover = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  const value: PopperContextType = {
    POPPER_INJECTION_KEY,
    POPPER_CONTENT_INJECTION_KEY,

    isOpen,
    setReference: refs.setReference,
    setFloating: refs.setFloating,
    floatingStyles,
    getReferenceProps,
    getFloatingProps
  }

  return <PopperContext.Provider value={value}>{children}</PopperContext.Provider>
}

export default ElPopper
