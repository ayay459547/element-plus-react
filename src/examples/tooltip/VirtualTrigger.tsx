import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import { useState } from 'react'

const TooltipVirtualTrigger: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <ElTooltip visible={visible} content="Bottom center" placement="bottom" effect="light" />
      <ElButton onClick={() => setVisible((isVisible) => !isVisible)}>test</ElButton>
    </>
  )
}

export default TooltipVirtualTrigger
