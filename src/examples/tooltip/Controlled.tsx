import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import { useState } from 'react'

const TooltipControlled: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <ElTooltip visible={visible} content={<span>Content</span>}>
      <ElButton onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        Hover me
      </ElButton>
    </ElTooltip>
  )
}

export default TooltipControlled
