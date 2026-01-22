import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import './Theme.scss'

const TooltipTheme: React.FC = () => {
  return (
    <>
      <ElTooltip content="Top center" placement="top">
        <ElButton>Dark</ElButton>
      </ElTooltip>
      <ElTooltip content="Bottom center" placement="bottom" effect="light">
        <ElButton>Light</ElButton>
      </ElTooltip>

      <ElTooltip content="Bottom center" effect="customized">
        <ElButton>Customized theme</ElButton>
      </ElTooltip>
    </>
  )
}

export default TooltipTheme
