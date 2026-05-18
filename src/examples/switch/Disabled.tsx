import ElSwitch from '@ayay459547/element-plus-react/components/switch/ElSwitch.tsx'
import type { ElSwitchProps } from '@ayay459547/element-plus-react/components/switch/types.ts'
import { useState } from 'react'

const SwitchDisabled: React.FC = () => {
  const [value1, setValue1] = useState<ElSwitchProps['value']>(true)
  const [value2, setValue2] = useState<ElSwitchProps['value']>(true)

  return (
    <>
      <ElSwitch value={value1} onChange={setValue1} disabled={true} />
      <ElSwitch value={value2} onChange={setValue2} className="ml-2" disabled={false} />
    </>
  )
}

export default SwitchDisabled
