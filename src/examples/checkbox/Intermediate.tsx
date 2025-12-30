import ElCheckbox from 'ayay-element-plus-react/components/checkbox/ElCheckbox.tsx'
import ElCheckboxGroup from 'ayay-element-plus-react/components/checkbox/ElCheckboxGroup.tsx'
import type {
  ElCheckboxGroupBaseProps,
  ElCheckboxProps
} from 'ayay-element-plus-react/components/checkbox/types'
import { useState } from 'react'

const CheckboxIntermediate: React.FC = () => {
  const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  const [checkedCities, setCheckedCities] = useState<ElCheckboxGroupBaseProps['value']>([
    'Shanghai',
    'Beijing'
  ])

  const [checkAll, setCheckAll] = useState(false)

  const [isIndeterminate, setIsIndeterminate] = useState(true)

  const handleCheckAllChange: ElCheckboxProps['onChange'] = (e) => {
    const _isChecked = e.target.checked

    if (_isChecked) {
      setCheckedCities([...cities])
    } else {
      setCheckedCities([])
    }
    setCheckAll(_isChecked)
    setIsIndeterminate(false)
  }

  const handleCheckedCitiesChange = (newValue: ElCheckboxGroupBaseProps['value']) => {
    setCheckedCities(newValue)

    const checkedCount = newValue?.length ?? 0
    setCheckAll(checkedCount === cities.length)
    setIsIndeterminate(checkedCount > 0 && checkedCount < cities.length)
  }

  return (
    <>
      <ElCheckbox
        checked={checkAll}
        indeterminate={isIndeterminate}
        onChange={handleCheckAllChange}
      >
        Check all
      </ElCheckbox>

      <ElCheckboxGroup value={checkedCities} onChange={handleCheckedCitiesChange}>
        {cities.map((city) => {
          return (
            <ElCheckbox key={city} label={city} value={city}>
              {city}
            </ElCheckbox>
          )
        })}
      </ElCheckboxGroup>
    </>
  )
}

export default CheckboxIntermediate
