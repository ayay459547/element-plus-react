import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import './AppendTo.scss'

const TooltipAppendTo: React.FC = () => {
  return (
    <ElTooltip
      append-to=".target-append-to"
      trigger="click"
      content="Append to .target-append-to"
      placement="top"
    >
      <ElButton className="target-append-to">Click to open tooltip</ElButton>
    </ElTooltip>
  )
}

export default TooltipAppendTo
