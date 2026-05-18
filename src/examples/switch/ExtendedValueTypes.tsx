import ElSwitch from '@ayay459547/element-plus-react/components/switch/ElSwitch.tsx'
import type { ElSwitchProps } from '@ayay459547/element-plus-react/components/switch/types.ts'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import { useState } from 'react'

const ExtendedValueTypes: React.FC = () => {
  const [value, setValue] = useState<ElSwitchProps['value']>('100')

  return (
    <ElTooltip content={`Switch value: ${value}`} placement="top">
      <ElSwitch
        value={value}
        onChange={setValue}
        style={
          {
            '--el-switch-on-color': '#13ce66',
            '--el-switch-off-color': '#ff4949'
          } as React.CSSProperties
        }
        activeValue="100"
        inactiveValue="0"
      />
    </ElTooltip>
  )
}

export default ExtendedValueTypes
