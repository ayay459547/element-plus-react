import type { ElementProps, ReferenceType } from '@floating-ui/react'
import {
  arrow,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions
} from '@floating-ui/react'
import { useEffect, useState } from 'react'
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
    trigger = 'hover',
    virtualTriggering = false,
    virtualRef,
    children
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const [arrowElement, setArrowElement] = useState<Element | null>(null)

  const contextmenuEnabled = trigger.includes('contextmenu')
  const hoverEnabled = trigger.includes('hover')
  const clickEnabled = trigger.includes('click') || contextmenuEnabled
  const focusEnabled = trigger.includes('focus')

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    placement,
    onOpenChange: (isOpen, event, reason) => {
      console.log('onOpenChange => ', { isOpen, disabled, event, reason })

      // 滑鼠右鍵 (待開發)
      const isRight = event && 'button' in event && event.button === 2
      if (contextmenuEnabled && reason === 'reference-press' && isRight) {
        console.log('滑鼠右鍵')
        return
      }

      const isVisible = disabled ? false : isOpen
      setIsOpen(isVisible)
      if (typeof onVisible === 'function') {
        onVisible(isVisible)
      }
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

  const hover = useHover(context, {
    enabled: hoverEnabled
  })
  const click = useClick(context, {
    enabled: clickEnabled
  })
  const focus = useFocus(context, {
    enabled: focusEnabled,
    visibleOnly: true
  })

  const dismiss = useDismiss(context, {
    referencePress: !clickEnabled,
    referencePressEvent: 'mousedown',
    outsidePress: true,
    outsidePressEvent: 'mousedown'
  })

  const triggerList: Array<ElementProps> = []
  if (hoverEnabled) triggerList.push(hover)
  if (clickEnabled) triggerList.push(click)
  if (focusEnabled) triggerList.push(focus)
  triggerList.push(dismiss)

  const { getReferenceProps, getFloatingProps } = useInteractions(triggerList)

  useEffect(() => {
    if (virtualTriggering && typeof virtualRef === 'object') {
      refs.setPositionReference(virtualRef as ReferenceType)
    }
  }, [refs, virtualTriggering, virtualRef])

  const value: PopperContextType = {
    POPPER_INJECTION_KEY,
    POPPER_CONTENT_INJECTION_KEY,

    isOpen: visible ?? isOpen,
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
    disabled,
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
