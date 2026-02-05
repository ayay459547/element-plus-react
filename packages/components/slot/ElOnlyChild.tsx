// components/slot/ElOnlyChild.tsx
import { composeRefs } from '@ayay459547/element-plus-react/utils/refs'
import { Children, cloneElement, forwardRef, isValidElement } from 'react'

interface ElOnlyChildProps {
  children: React.ReactNode
  [key: string]: any // 允許傳入 onClick, onMouseEnter, style 等
}

const COMPONENT_NAME = 'ElOnlyChild'

const ElOnlyChild: React.FC<ElOnlyChildProps> = forwardRef<HTMLElement, ElOnlyChildProps>(
  (props, ref) => {
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref: composeRefs((child as any).ref, ref)
    })
  }
)

ElOnlyChild.displayName = COMPONENT_NAME

export default ElOnlyChild
