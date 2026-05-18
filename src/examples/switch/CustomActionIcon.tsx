import ElSwitch from '@ayay459547/element-plus-react/components/switch/ElSwitch.tsx'
import type { ElSwitchProps } from '@ayay459547/element-plus-react/components/switch/types.ts'
import Hide from '@ayay459547/element-plus-react/icons-svg/hide.svg?react'
import View from '@ayay459547/element-plus-react/icons-svg/view.svg?react'
import { useState } from 'react'

const CustomActionIcon: React.FC = () => {
  const [value, setValue] = useState<ElSwitchProps['value']>(true)

  return (
    <ElSwitch
      value={value}
      onChange={setValue}
      activeActionIcon={<View />}
      inactiveActionIcon={<Hide />}
    />
  )
}

export default CustomActionIcon
