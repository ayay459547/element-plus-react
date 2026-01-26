import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import './Animations.scss'

const TooltipAnimations: React.FC = () => {
  return (
    <ElTooltip content="I am an el-tooltip" transition="slide-fade">
      <ElButton>trigger me</ElButton>
    </ElTooltip>
  )
}

export default TooltipAnimations
