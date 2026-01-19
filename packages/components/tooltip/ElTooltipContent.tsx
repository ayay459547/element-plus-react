import ElPopperContent from '@ayay459547/element-plus-react/components/popper/ElPopperContent.tsx'
import ElTeleport from '@ayay459547/element-plus-react/components/teleport/ElTeleport.tsx'
import type { ElTeleportProps } from '@ayay459547/element-plus-react/components/teleport/types'
import type { ReactNode } from 'react'

type ElTooltipContentProps = {
  appendTo?: ElTeleportProps['appendTo']
  children?: ReactNode
}

const ElTooltipContent: React.FC<ElTooltipContentProps> = ({
  appendTo = document.body,
  children
}) => {
  return (
    <ElTeleport appendTo={appendTo}>
      <ElPopperContent>{children}</ElPopperContent>
    </ElTeleport>
  )
}

export default ElTooltipContent
