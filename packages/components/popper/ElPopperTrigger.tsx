import ElOnlyChild from '@ayay459547/element-plus-react/components/slot/ElOnlyChild.tsx'
import type { ReactNode } from 'react'

type ElPopperTriggerProps = {
  children?: ReactNode
}

const ElPopperTrigger: React.FC<ElPopperTriggerProps> = ({ children }) => {
  return <ElOnlyChild>{children}</ElOnlyChild>
}

export default ElPopperTrigger
