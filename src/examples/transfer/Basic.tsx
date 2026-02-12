import ElTransfer from '@ayay459547/element-plus-react/components/transfer/ElTransfer.tsx'
import { useState } from 'react'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const TransferBasic: React.FC = () => {
  const [value, setValue] = useState<Array<string | number>>([])

  const generateData = () => {
    const data: Option[] = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `Option ${i}`,
        disabled: i % 4 === 0
      })
    }
    return data
  }

  const data = generateData()

  return (
    <ElTransfer
      data={data}
      value={value}
      onChange={(newValue) => {
        if (newValue) {
          setValue(newValue)
        }
      }}
    />
  )
}

export default TransferBasic
