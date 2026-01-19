import { usePopperContext } from '@ayay459547/element-plus-react/components/popper/usePopper.ts'
import ElOnlyChild from '@ayay459547/element-plus-react/components/slot/ElOnlyChild.tsx'
import type { ElPopperTriggerProps } from './types'

const ElPopperTrigger: React.FC<ElPopperTriggerProps> = ({ children }) => {
  const { setReference, getReferenceProps } = usePopperContext()

  return (
    <ElOnlyChild
      ref={(element) => {
        setReference(element)
      }}
      {...getReferenceProps()}
    >
      {children}
    </ElOnlyChild>
  )
}

export default ElPopperTrigger
