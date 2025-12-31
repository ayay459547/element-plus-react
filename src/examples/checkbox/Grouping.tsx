import ElCheckbox from '@ayay459547/element-plus-react/components/checkbox/ElCheckbox.tsx'
import ElCheckboxGroup from '@ayay459547/element-plus-react/components/checkbox/ElCheckboxGroup.tsx'
import type { ElCheckboxGroupBaseProps } from '@ayay459547/element-plus-react/components/checkbox/types'
import { useState } from 'react'

const CheckboxGrouping: React.FC = () => {
  const [checkList, setCheckList] = useState<ElCheckboxGroupBaseProps['value']>([
    'Value selected and disabled',
    'Value A'
  ])

  return (
    <ElCheckboxGroup
      value={checkList}
      onChange={(newValue) => {
        setCheckList(newValue)
      }}
    >
      <ElCheckbox label="Option A" value="Value A" />
      <ElCheckbox label="Option B" value="Value B" />
      <ElCheckbox label="Option C" value="Value C" />
      <ElCheckbox label="disabled" value="Value disabled" disabled />
      <ElCheckbox label="selected and disabled" value="Value selected and disabled" disabled />
    </ElCheckboxGroup>
  )
}

export default CheckboxGrouping
