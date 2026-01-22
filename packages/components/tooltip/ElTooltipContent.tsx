import ElPopperContent from '@ayay459547/element-plus-react/components/popper/ElPopperContent.tsx'
import type { ReactNode } from 'react'

type ElTooltipContentProps = {
  children?: ReactNode
}

const ElTooltipContent: React.FC<ElTooltipContentProps> = ({ children }) => {
  return <ElPopperContent>{children}</ElPopperContent>
}

export default ElTooltipContent
