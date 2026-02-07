import ElRadioButton from '@ayay459547/element-plus-react/components/radio/ElRadioButton.tsx'
import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const RadioButton: React.FC = () => {
  const [radio, setRadio] = useState('New York')

  return (
    <>
      <div>
        <ElRadioGroup
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          size="large"
          fill="#409eff"
        >
          <ElRadioButton label="New York" value="New York" />
          <ElRadioButton label="Washington" value="Washington" />
          <ElRadioButton label="Los Angeles" value="Los Angeles" />
          <ElRadioButton label="Chicago" value="Chicago" />
        </ElRadioGroup>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ElRadioGroup
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          text-color="#fff"
          fill="#6c6cff"
        >
          <ElRadioButton label="New York" value="New York" />
          <ElRadioButton label="Washington" value="Washington" />
          <ElRadioButton label="Los Angeles" value="Los Angeles" />
          <ElRadioButton label="Chicago" value="Chicago" />
        </ElRadioGroup>
      </div>
      <div style={{ marginTop: '20px' }}>
        <ElRadioGroup value={radio} onChange={(e) => setRadio(e.target.value)} size="small">
          <ElRadioButton label="New York" value="New York" />
          <ElRadioButton label="Washington" value="Washington" disabled />
          <ElRadioButton label="Los Angeles" value="Los Angeles" />
          <ElRadioButton label="Chicago" value="Chicago" />
        </ElRadioGroup>
      </div>
    </>
  )
}

export default RadioButton
