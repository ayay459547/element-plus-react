import ElPopperTrigger from '@ayay459547/element-plus-react/components/popper/ElPopperTrigger.tsx'
import type { ReactNode } from 'react'

type ElTooltipTriggerProps = {
  children?: ReactNode
}

const ElTooltipTrigger: React.FC<ElTooltipTriggerProps> = ({ children }) => {
  return <ElPopperTrigger>{children}</ElPopperTrigger>
}

export default ElTooltipTrigger
