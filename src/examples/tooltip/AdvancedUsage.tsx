import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import { useState } from 'react'

const TooltipAdvancedUsage: React.FC = () => {
  const [disabled, setDisabled] = useState(false)

  return (
    <ElTooltip
      disabled={disabled}
      content="click to close tooltip function"
      placement="bottom"
      effect="light"
    >
      <ElButton onClick={() => setDisabled((isDisabled) => !isDisabled)}>
        click to {disabled ? 'active' : 'close'} tooltip function
      </ElButton>
    </ElTooltip>
  )
}

export default TooltipAdvancedUsage
