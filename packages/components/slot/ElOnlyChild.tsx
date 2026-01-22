// components/slot/ElOnlyChild.tsx
import type { RefObject } from 'react'
import { Children, cloneElement, forwardRef, isValidElement } from 'react'

interface ElOnlyChildProps {
  children: React.ReactNode
  [key: string]: any // 允許傳入 onClick, onMouseEnter, style 等
}

function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') {
        ref(node)
      } else {
        ;(ref as RefObject<T | null>).current = node
      }
    })
  }
}

const ElOnlyChild = forwardRef<HTMLElement, ElOnlyChildProps>((props, ref) => {
  const { children, ...restProps } = props
  if (children === null || children === undefined) return null

  if (Children.count(children) !== 1) {
    console.error('[ElOnlyChild] requires exactly one valid React element as a child.')
    return null
  }

  const child = Children.only(children)
  if (!isValidElement(child)) {
    return null
  }

  return cloneElement(child, {
    ...restProps,
    ref: composeRefs((child as any).ref, ref)
  })
})

ElOnlyChild.displayName = 'ElOnlyChild'

export default ElOnlyChild
