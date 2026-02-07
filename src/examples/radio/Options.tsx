import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const RadioOptions: React.FC = () => {
  const [radio, setRadio] = useState('3')

  const props = { value: 'id', label: 'name', disabled: 'unable' }
  const options = [
    {
      id: '3',
      name: 'Option A'
    },
    {
      id: '6',
      name: 'Option B'
    },
    {
      id: '9',
      name: 'Option C',
      unable: true
    }
  ]

  return (
    <ElRadioGroup
      value={radio}
      onChange={(e) => setRadio(e.target.value)}
      props={props}
      options={options}
    />
  )
}

export default RadioOptions
