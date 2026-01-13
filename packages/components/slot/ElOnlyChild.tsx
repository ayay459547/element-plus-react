import type { ReactElement, ReactNode } from 'react'
import { Children, cloneElement, forwardRef, isValidElement } from 'react'

function canAcceptRef(element: ReactElement) {
  const type = element.type

  // DOM element
  if (typeof type === 'string') return true

  // class component
  if (typeof type === 'function' && type.prototype?.isReactComponent) {
    return true
  }

  // forwardRef component
  if (
    typeof type === 'object' &&
    (type as any)?.$$typeof?.toString() === 'Symbol(react.forward_ref)'
  ) {
    return true
  }

  return false
}

type OnlyChildProps = {
  children?: ReactNode
}

const ElOnlyChild = forwardRef<HTMLElement, OnlyChildProps>(({ children }, forwardedRef) => {
  const valid = Children.toArray(children).filter(Boolean)
  if (valid.length === 0) return null

  const child = valid[0]

  if (typeof child === 'string' || typeof child === 'number') {
    return <span ref={forwardedRef}>{child}</span>
  }

  if (!isValidElement(child)) return null

  const element = child as ReactElement<any>

  if (!canAcceptRef(element)) {
    return element
  }

  return cloneElement(element)

  // return cloneElement(element, {
  //   ref: forwardedRef
  // })
})

export default ElOnlyChild
