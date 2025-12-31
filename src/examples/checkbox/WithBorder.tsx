import ElCheckbox from '@ayay459547/element-plus-react/components/checkbox/ElCheckbox.tsx'
import ElCheckboxGroup from '@ayay459547/element-plus-react/components/checkbox/ElCheckboxGroup.tsx'
import type { ElCheckboxGroupBaseProps } from '@ayay459547/element-plus-react/components/checkbox/types'
import { useState } from 'react'

const CheckboxWithBorder: React.FC = () => {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(true)
  const [checkboxGroup1, setCheckboxGroup1] = useState<ElCheckboxGroupBaseProps['value']>([
    'Value1'
  ])

  return (
    <>
      <div>
        <ElCheckbox
          checked={checked1}
          label="Option1"
          size="large"
          border
          onChange={(e) => setChecked1(e.target.checked)}
        />
        <ElCheckbox
          checked={checked2}
          label="Option2"
          size="large"
          border
          onChange={(e) => setChecked2(e.target.checked)}
        />
      </div>
      <div style={{ marginTop: '24px' }}>
        <ElCheckbox
          checked={checked3}
          label="Option1"
          border
          onChange={(e) => setChecked3(e.target.checked)}
        />
        <ElCheckbox
          checked={checked4}
          label="Option2"
          border
          onChange={(e) => setChecked4(e.target.checked)}
        />
      </div>
      <div style={{ marginTop: '24px' }}>
        <ElCheckboxGroup value={checkboxGroup1} size="small" onChange={setCheckboxGroup1}>
          <ElCheckbox label="Option1" value="Value1" border />
          <ElCheckbox label="Option2" value="Value2" border />
        </ElCheckboxGroup>
      </div>
      <div style={{ marginTop: '24px' }}>
        <ElCheckboxGroup value={checkboxGroup1} size="small" disabled onChange={setCheckboxGroup1}>
          <ElCheckbox label="Option1" value="Value1" border disabled />
          <ElCheckbox label="Option2" value="Value2" border disabled />
        </ElCheckboxGroup>
      </div>
    </>
  )
}

export default CheckboxWithBorder
