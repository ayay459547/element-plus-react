import ElSwitch from '@ayay459547/element-plus-react/components/switch/ElSwitch.tsx'
import type { ElSwitchProps } from '@ayay459547/element-plus-react/components/switch/types.ts'
import { useState } from 'react'

const CustomActionSlot: React.FC = () => {
  const [value, setValue] = useState<ElSwitchProps['value']>(true)

  return (
    <ElSwitch
      value={value}
      onChange={setValue}
      className="mt-2"
      activeAction={<span className="custom-active-action">T</span>}
      inactiveAction={<span className="custom-active-action">F</span>}
    />
  )
}

export default CustomActionSlot
