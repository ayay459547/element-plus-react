import ElTransfer from '@ayay459547/element-plus-react/components/transfer/ElTransfer.tsx'
import type { ElTransferPanelProps } from '@ayay459547/element-plus-react/components/transfer/types'
import { useState } from 'react'

interface Option {
  key: number
  label: string
  initial: string
}

const TransferFilterable: React.FC = () => {
  const [value, setValue] = useState<Array<string | number>>([])

  const generateData = () => {
    const data: Option[] = []
    const states = [
      'California',
      'Illinois',
      'Maryland',
      'Texas',
      'Florida',
      'Colorado',
      'Connecticut'
    ]
    const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
    states.forEach((city, index) => {
      data.push({
        label: city,
        key: index,
        initial: initials[index]
      })
    })
    return data
  }

  const data = generateData()

  const filterMethod: ElTransferPanelProps['filterMethod'] = (query, item) => {
    return item.initial.toLowerCase().includes(query.toLowerCase())
  }

  return (
    <ElTransfer
      data={data}
      value={value}
      filterable
      filterMethod={filterMethod}
      filterPlaceholder="State Abbreviations"
      onChange={setValue}
    />
  )
}

export default TransferFilterable
