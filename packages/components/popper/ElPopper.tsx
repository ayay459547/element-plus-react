import {
  arrow,
  autoPlacement,
  offset,
  useFloating,
  useHover,
  useInteractions
} from '@floating-ui/react'
import { useState } from 'react'
// import { usePopper } from 'react-popper'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'

import type { PopperProps } from './types'
import type { PopperContextType } from './usePopper'
import { PopperContext } from './usePopper'

const ElPopper: React.FC<PopperProps> = ({
  appendTo = document.body,
  effect = 'dark',
  offset: popperOffset = 12,
  placement = 'bottom',
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const [arrowElement, setArrowElement] = useState<SVGSVGElement | null>(null)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(popperOffset),
      autoPlacement({
        // alignment: 'end',
        allowedPlacements: [placement],
        autoAlignment: true
      }),
      arrow({
        element: arrowElement
      })
    ]
  })
  const hover = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  const value: PopperContextType = {
    POPPER_INJECTION_KEY,
    POPPER_CONTENT_INJECTION_KEY,

    isOpen,
    domReference: refs.domReference,
    setReference: refs.setReference,
    setFloating: refs.setFloating,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,

    setArrowElement,
    context,

    // props
    appendTo,
    effect
  }

  return <PopperContext.Provider value={value}>{children}</PopperContext.Provider>
}

export default ElPopper
