import ElRadio from '@ayay459547/element-plus-react/components/radio/ElRadio.tsx'
import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const RadioBasicUsage: React.FC = () => {
  const [radio1, setRadio1] = useState('1')
  const [radio2, setRadio2] = useState('1')
  const [radio3, setRadio3] = useState('1')

  return (
    <>
      <div className="mb-2 ml-4">
        <ElRadioGroup value={radio1} onChange={(e) => setRadio1(e.target.value)}>
          <ElRadio value="1" size="large">
            Option 1
          </ElRadio>
          <ElRadio value="2" size="large">
            Option 2
          </ElRadio>
        </ElRadioGroup>
      </div>
      <div className="my-2 ml-4">
        <ElRadioGroup value={radio2} onChange={(e) => setRadio2(e.target.value)}>
          <ElRadio value="1">Option 1</ElRadio>
          <ElRadio value="2">Option 2</ElRadio>
        </ElRadioGroup>
      </div>
      <div className="my-4 ml-4">
        <ElRadioGroup value={radio3} onChange={(e) => setRadio3(e.target.value)}>
          <ElRadio value="1" size="small">
            Option 1
          </ElRadio>
          <ElRadio value="2" size="small">
            Option 2
          </ElRadio>
        </ElRadioGroup>
      </div>
    </>
  )
}

export default RadioBasicUsage
