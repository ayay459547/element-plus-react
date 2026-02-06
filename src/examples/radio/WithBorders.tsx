import ElRadio from '@ayay459547/element-plus-react/components/radio/ElRadio.tsx'
import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const RadioWithBorders: React.FC = () => {
  const [radio1, setRadio1] = useState('1')
  const [radio2, setRadio2] = useState('1')
  const [radio3, setRadio3] = useState('1')
  const [radio4, setRadio4] = useState('1')

  return (
    <>
      <div>
        <ElRadioGroup value={radio1} onChange={(e) => setRadio1(e.target.value)}>
          <ElRadio value="1" size="large" border>
            Option A
          </ElRadio>
          <ElRadio value="2" size="large" border>
            Option B
          </ElRadio>
        </ElRadioGroup>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ElRadioGroup value={radio2} onChange={(e) => setRadio2(e.target.value)}>
          <ElRadio value="1" border>
            Option A
          </ElRadio>
          <ElRadio value="2" border>
            Option B
          </ElRadio>
        </ElRadioGroup>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ElRadioGroup value={radio3} onChange={(e) => setRadio3(e.target.value)}>
          <ElRadio value="1" size="small" border>
            Option A
          </ElRadio>
          <ElRadio value="2" size="small" border disabled>
            Option B
          </ElRadio>
        </ElRadioGroup>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ElRadioGroup value={radio4} onChange={(e) => setRadio4(e.target.value)}>
          <ElRadio value="1" size="small" border disabled>
            Option A
          </ElRadio>
          <ElRadio value="2" size="small" border disabled>
            Option B
          </ElRadio>
        </ElRadioGroup>
      </div>
    </>
  )
}

export default RadioWithBorders
