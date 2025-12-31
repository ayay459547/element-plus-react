import ElCheckboxGroup from '@ayay459547/element-plus-react/components/checkbox/ElCheckboxGroup.tsx'
import type { ElCheckboxGroupBaseProps } from '@ayay459547/element-plus-react/components/checkbox/types'
import { useState } from 'react'

const CheckboxOptions: React.FC = () => {
  const [checkList, setCheckList] = useState<ElCheckboxGroupBaseProps['value']>([
    'Value selected and disabled',
    'Value A'
  ])

  const props = { label: 'name', value: 'id', disabled: 'unable' }
  const options = [
    { name: 'Option A', id: 'Value A' },
    { name: 'Option B', id: 'Value B' },
    { name: 'Option C', id: 'Value C' },
    { name: 'disabled', id: 'Value disabled', unable: true },
    {
      name: 'selected and disabled',
      id: 'Value selected and disabled',
      unable: true
    }
  ]

  return (
    <ElCheckboxGroup
      value={checkList}
      onChange={(newValue) => {
        setCheckList(newValue)
      }}
      props={props}
      options={options}
    />
  )
}

export default CheckboxOptions
