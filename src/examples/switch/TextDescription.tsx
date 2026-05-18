import ElSwitch from '@ayay459547/element-plus-react/components/switch/ElSwitch.tsx'
import type { ElSwitchProps } from '@ayay459547/element-plus-react/components/switch/types.ts'
import { useState } from 'react'

const TextDescription: React.FC = () => {
  const [value1, setValue1] = useState<ElSwitchProps['value']>(true)
  const [value2, setValue2] = useState<ElSwitchProps['value']>(true)
  const [value3, setValue3] = useState<ElSwitchProps['value']>(true)
  const [value4, setValue4] = useState<ElSwitchProps['value']>(true)
  const [value5, setValue5] = useState<ElSwitchProps['value']>(true)
  const [value6, setValue6] = useState<ElSwitchProps['value']>(true)

  return (
    <>
      <ElSwitch
        value={value1}
        onChange={setValue1}
        className="mb-2"
        activeText="Pay by month"
        inactiveText="Pay by year"
      />
      <br />
      <ElSwitch
        value={value2}
        onChange={setValue2}
        className="mb-2"
        style={
          {
            '--el-switch-on-color': '#13ce66',
            '--el-switch-off-color': '#ff4949'
          } as React.CSSProperties
        }
        activeText="Pay by month"
        inactiveText="Pay by year"
      />
      <br />
      <ElSwitch
        value={value3}
        onChange={setValue3}
        inlinePrompt
        activeText="是"
        inactiveText="否"
      />
      <ElSwitch
        value={value4}
        onChange={setValue4}
        className="ml-2"
        inlinePrompt
        style={
          {
            '--el-switch-on-color': '#13ce66',
            '--el-switch-off-color': '#ff4949'
          } as React.CSSProperties
        }
        activeText="Y"
        inactiveText="N"
      />

      <ElSwitch
        value={value6}
        onChange={setValue6}
        className="ml-2"
        width="60"
        inlinePrompt
        activeText="超出省略"
        inactiveText="超出省略"
      />
      <ElSwitch
        value={value5}
        onChange={setValue5}
        className="ml-2"
        inlinePrompt
        style={
          {
            '--el-switch-on-color': '#13ce66',
            '--el-switch-off-color': '#ff4949'
          } as React.CSSProperties
        }
        activeText="完整展示多个内容"
        inactiveText="多个内容"
      />
    </>
  )
}

export default TextDescription
