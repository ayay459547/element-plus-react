import ElSwitch from '@ayay459547/element-plus-react/components/switch/ElSwitch.tsx'
import type { ElSwitchProps } from '@ayay459547/element-plus-react/components/switch/types.ts'
import { useState } from 'react'

const SwitchSizes: React.FC = () => {
  const [value, setValue] = useState<ElSwitchProps['value']>(true)

  return (
    <>
      <ElSwitch
        value={value}
        onChange={setValue}
        size="large"
        activeText="Open"
        inactiveText="Close"
      />
      <br />
      <ElSwitch value={value} onChange={setValue} activeText="Open" inactiveText="Close" />
      <br />
      <ElSwitch
        value={value}
        onChange={setValue}
        size="small"
        activeText="Open"
        inactiveText="Close"
      />
    </>
  )
}

export default SwitchSizes
