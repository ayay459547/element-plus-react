import ElTeleport from '@ayay459547/element-plus-react/components/teleport/ElTeleport.tsx'
import type { ReactNode } from 'react'

type ElTooltipContentProps = {
  children?: ReactNode
}

const ElTooltipContent: React.FC<ElTooltipContentProps> = ({ children }) => {
  return <ElTeleport>{children}</ElTeleport>
}

export default ElTooltipContent
