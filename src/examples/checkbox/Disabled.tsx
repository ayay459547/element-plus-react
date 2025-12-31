import ElCheckbox from '@ayay459547/element-plus-react/components/checkbox/ElCheckbox.tsx'
import { useState } from 'react'

const CheckboxDisabled: React.FC = () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)

  return (
    <>
      <ElCheckbox checked={checked1} disabled onChange={(e) => setChecked1(e.target.checked)}>
        Disabled
      </ElCheckbox>
      <ElCheckbox checked={checked2} onChange={(e) => setChecked2(e.target.checked)}>
        Not disabled
      </ElCheckbox>
    </>
  )
}

export default CheckboxDisabled
