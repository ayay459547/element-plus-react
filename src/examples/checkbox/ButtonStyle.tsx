import ElCheckboxButton from 'ayay-element-plus-react/components/checkbox/ElCheckboxButton.tsx'
import ElCheckboxGroup from 'ayay-element-plus-react/components/checkbox/ElCheckboxGroup.tsx'
import type { ElCheckboxGroupBaseProps } from 'ayay-element-plus-react/components/checkbox/types'
import { useState } from 'react'

const CheckboxButtonStyle: React.FC = () => {
  const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  const [checkboxGroup1, setCheckboxGroup1] = useState<ElCheckboxGroupBaseProps['value']>([
    'Shanghai'
  ])
  const [checkboxGroup2, setCheckboxGroup2] = useState<ElCheckboxGroupBaseProps['value']>([
    'Shanghai'
  ])
  const [checkboxGroup3, setCheckboxGroup3] = useState<ElCheckboxGroupBaseProps['value']>([
    'Shanghai'
  ])

  return (
    <>
      <div>
        <ElCheckboxGroup value={checkboxGroup1} size="large" onChange={setCheckboxGroup1}>
          {cities.map((city) => (
            <ElCheckboxButton key={city} label={city} value={city}>
              {city}
            </ElCheckboxButton>
          ))}
        </ElCheckboxGroup>
      </div>
      <div style={{ marginTop: '24px' }}>
        <ElCheckboxGroup value={checkboxGroup2} onChange={setCheckboxGroup2}>
          {cities.map((city) => (
            <ElCheckboxButton key={city} label={city} value={city}>
              {city}
            </ElCheckboxButton>
          ))}
        </ElCheckboxGroup>
      </div>
      <div style={{ marginTop: '24px' }}>
        <ElCheckboxGroup value={checkboxGroup3} size="small" onChange={setCheckboxGroup3}>
          {cities.map((city) => (
            <ElCheckboxButton key={city} label={city} value={city} disabled={city === 'Beijing'}>
              {city}
            </ElCheckboxButton>
          ))}
        </ElCheckboxGroup>
      </div>
      <div style={{ marginTop: '24px' }}>
        <ElCheckboxGroup value={checkboxGroup3} size="small" disabled onChange={setCheckboxGroup3}>
          {cities.map((city) => (
            <ElCheckboxButton key={city} label={city} value={city}>
              {city}
            </ElCheckboxButton>
          ))}
        </ElCheckboxGroup>
      </div>
    </>
  )
}

export default CheckboxButtonStyle
