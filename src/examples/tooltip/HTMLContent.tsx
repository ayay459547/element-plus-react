import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'

const TooltipHTMLContent: React.FC = () => {
  return (
    <ElTooltip content="<span>The content can be <strong>HTML</strong></span>" rawContent>
      <ElButton>hover me</ElButton>
    </ElTooltip>
  )
}

export default TooltipHTMLContent
