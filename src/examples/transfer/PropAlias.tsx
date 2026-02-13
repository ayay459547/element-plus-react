import ElTransfer from '@ayay459547/element-plus-react/components/transfer/ElTransfer.tsx'
import { useState } from 'react'

interface Option {
  value: number
  desc: string
  disabled: boolean
}

const TransferPropAlias: React.FC = () => {
  const [value, setValue] = useState<Array<string | number>>([])

  const generateData = () => {
    const data: Option[] = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        value: i,
        desc: `Option ${i}`,
        disabled: i % 4 === 0
      })
    }
    return data
  }

  const data = generateData()

  return (
    <ElTransfer
      data={data}
      props={{
        key: 'value',
        label: 'desc'
      }}
      value={value}
      onChange={setValue}
    />
  )
}

export default TransferPropAlias
