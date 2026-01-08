import type { ReactNode } from 'react'

type ElTooltipTriggerProps = {
  children: ReactNode
}

const ElTooltipTrigger: React.FC<ElTooltipTriggerProps> = ({ children }) => {
  return <div>{children}</div>
}

export default ElTooltipTrigger
