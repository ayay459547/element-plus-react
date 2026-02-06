import ElRadio from '@ayay459547/element-plus-react/components/radio/ElRadio.tsx'
import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const RadioDisabled: React.FC = () => {
  const [radio, setRadio] = useState('selected and disabled')

  return (
    <ElRadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
      <ElRadio value="disabled" disabled>
        Option A
      </ElRadio>
      <ElRadio value="selected and disabled" disabled>
        Option B
      </ElRadio>
    </ElRadioGroup>
  )
}

export default RadioDisabled
