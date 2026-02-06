import ElRadio from '@ayay459547/element-plus-react/components/radio/ElRadio.tsx'
import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const RadioGroup: React.FC = () => {
  const [radio, setRadio] = useState('3')

  return (
    <ElRadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
      <ElRadio value="3">Option A</ElRadio>
      <ElRadio value="6">Option B</ElRadio>
      <ElRadio value="9">Option C</ElRadio>
    </ElRadioGroup>
  )
}

export default RadioGroup
