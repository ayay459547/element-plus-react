import { arrow, flip, offset, useFloating, useHover, useInteractions } from '@floating-ui/react'
import { useState } from 'react'
// import { usePopper } from 'react-popper'
import { POPPER_CONTENT_INJECTION_KEY, POPPER_INJECTION_KEY } from './constants'

import type { PopperProps } from './types'
import type { PopperContextType } from './usePopper'
import { PopperContext } from './usePopper'

const ElPopper: React.FC<PopperProps> = (props) => {
  const {
    appendTo = document.body,
    effect = 'dark',
    content,
    rawContent = false,
    placement = 'bottom',
    fallbackPlacements,
    visible,
    onVisible,
    disabled = false,
    offset: popperOffset = 12,
    transition,
    showArrow = true,
    popperClass,
    popperStyle,
    enterable = true,
    teleported = true,
    children
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const [arrowElement, setArrowElement] = useState<Element | null>(null)

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    placement,
    onOpenChange: (isOpen) => {
      setIsOpen(disabled ? false : isOpen)
      if (typeof onVisible === 'function') {
        onVisible(isOpen)
      }
      // console.log(event) // e.g. MouseEvent
      // console.log(reason) // e.g. 'hover'
    },
    middleware: [
      offset(popperOffset),
      flip({
        fallbackPlacements
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

    isOpen: disabled ? false : (visible ?? isOpen),
    domReference: refs.domReference,
    setReference: refs.setReference,
    setFloating: refs.setFloating,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,

    setArrowElement,
    context,
    middlewareData,

    // props
    appendTo,
    effect,
    content,
    rawContent,
    placement,
    fallbackPlacements,
    transition,
    showArrow,
    popperClass,
    popperStyle,
    enterable,
    teleported
  }

  return <PopperContext.Provider value={value}>{children}</PopperContext.Provider>
}

export default ElPopper
