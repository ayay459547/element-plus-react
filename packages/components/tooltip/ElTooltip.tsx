import ElPopper from '@ayay459547/element-plus-react/components/popper/ElPopper.tsx'
import ElPopperArrow from '@ayay459547/element-plus-react/components/popper/ElPopperArrow.tsx'
import ElTooltipContent from './ElTooltipContent.tsx'
import ElTooltipTrigger from './ElTooltipTrigger.tsx'
import type { ElTooltipProps } from './types'

const ElTooltip: React.FC<ElTooltipProps> = ({ showArrow = true, children, content }) => {
  return (
    <ElPopper>
      <ElTooltipTrigger>{children}</ElTooltipTrigger>
      <ElTooltipContent>
        {showArrow && <ElPopperArrow />}
        {content}
      </ElTooltipContent>
    </ElPopper>
  )
}

export default ElTooltip
