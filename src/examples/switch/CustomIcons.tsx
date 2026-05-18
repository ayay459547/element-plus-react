import ElSwitch from '@ayay459547/element-plus-react/components/switch/ElSwitch.tsx'
import type { ElSwitchProps } from '@ayay459547/element-plus-react/components/switch/types.ts'
import Check from '@ayay459547/element-plus-react/icons-svg/check.svg?react'
import Close from '@ayay459547/element-plus-react/icons-svg/close.svg?react'
import { useState } from 'react'

const CustomIcons: React.FC = () => {
  const [value1, setValue1] = useState<ElSwitchProps['value']>(true)
  const [value2, setValue2] = useState<ElSwitchProps['value']>(true)

  return (
    <>
      <ElSwitch
        value={value1}
        onChange={setValue1}
        activeIcon={<Check />}
        inactiveIcon={<Close />}
      />
      <br />
      <ElSwitch
        value={value2}
        onChange={setValue2}
        className="mt-2"
        style={{
          marginLeft: '24px'
        }}
        inlinePrompt
        activeIcon={<Check />}
        inactiveIcon={<Close />}
      />
    </>
  )
}

export default CustomIcons
