import ElCheckbox from '@ayay/element-plus-react/components/checkbox/ElCheckbox.tsx'
import { useState } from 'react'

const CheckboxBasic: React.FC = () => {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)

  return (
    <>
      <div>
        <ElCheckbox
          label="Option 1"
          size="large"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
        />
        <ElCheckbox
          label="Option 2"
          size="large"
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
        />
      </div>
      <div className="my-2">
        <ElCheckbox
          label="Option 1"
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
        />
        <ElCheckbox
          label="Option 2"
          checked={checked4}
          onChange={(e) => setChecked4(e.target.checked)}
        />
      </div>
      <div className="my-2">
        <ElCheckbox
          label="Option 1"
          size="small"
          checked={checked5}
          onChange={(e) => setChecked5(e.target.checked)}
        />
        <ElCheckbox
          label="Option 2"
          size="small"
          checked={checked6}
          onChange={(e) => setChecked6(e.target.checked)}
        />
      </div>
    </>
  )
}

export default CheckboxBasic
