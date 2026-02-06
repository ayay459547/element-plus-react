import { usePopperContext } from '@ayay459547/element-plus-react/components/popper/usePopperContext'
import ElOnlyChild from '@ayay459547/element-plus-react/components/slot/ElOnlyChild.tsx'
import type { HTMLProps } from 'react'
import { isValidElement } from 'react'
import type { ElPopperTriggerProps } from './types'

const ElPopperTrigger: React.FC<ElPopperTriggerProps> = ({ children }) => {
  const { setReference, getReferenceProps } = usePopperContext()

  const refProps = isValidElement(children) ? (children.props as HTMLProps<Element>) : undefined

  return (
    <ElOnlyChild
      ref={(element) => {
        setReference(element)
      }}
      {...getReferenceProps(refProps)}
    >
      {children}
    </ElOnlyChild>
  )
}

ElPopperTrigger.displayName = 'ElPopperTrigger'

export default ElPopperTrigger
