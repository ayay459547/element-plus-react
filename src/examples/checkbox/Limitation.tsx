import ElCheckbox from '@ayay/element-plus-react/components/checkbox/ElCheckbox.tsx'
import ElCheckboxGroup from '@ayay/element-plus-react/components/checkbox/ElCheckboxGroup.tsx'
import type { ElCheckboxGroupBaseProps } from '@ayay/element-plus-react/components/checkbox/types'
import { useState } from 'react'

const CheckboxLimitation: React.FC = () => {
  const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  const [checkedCities, setCheckedCities] = useState<ElCheckboxGroupBaseProps['value']>([
    'Shanghai'
  ])

  const handleCheckedCitiesChange = (newValue: ElCheckboxGroupBaseProps['value']) => {
    setCheckedCities(newValue)
  }

  return (
    <ElCheckboxGroup value={checkedCities} min={1} max={2} onChange={handleCheckedCitiesChange}>
      {cities.map((city) => {
        return (
          <ElCheckbox key={city} label={city} value={city}>
            {city}
          </ElCheckbox>
        )
      })}
    </ElCheckboxGroup>
  )
}

export default CheckboxLimitation
