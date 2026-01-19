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

  // 1️⃣ 必須只有一個 child
  if (Children.count(children) !== 1) {
    console.error('[ElOnlyChild] requires exactly one valid React element as a child.')
    return null
  }

  // 2️⃣ 必須是 ReactElement
  const child = Children.only(children)
  if (!isValidElement(child)) {
    return null
  }

  // 3️⃣ 合併 ref（child 原本的 ref + 外部 ref）
  return cloneElement(child, {
    ...restProps,
    ref: composeRefs((child as any).ref, ref)
  })
})

ElOnlyChild.displayName = 'ElOnlyChild'

export default ElOnlyChild
