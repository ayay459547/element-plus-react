import React, { useState } from 'react'
import { ElDateRangePanel } from '@ayay459547/element-plus-react'
import dayjs, { Dayjs } from 'dayjs'

const Range = () => {
  const [value, setValue] = useState<Dayjs[] | null>([dayjs(), dayjs().add(7, 'day')])

  return (
    <div>
      <h3>Date Range Picker Panel</h3>
      <p>
        Selected Range: {value?.[0]?.format('YYYY-MM-DD')} - {value?.[1]?.format('YYYY-MM-DD')}
      </p>
      <ElDateRangePanel
        value={value}
        onPick={(val) => {
          console.log('Range Picked:', val)
          if (Array.isArray(val)) {
            setValue(val)
          }
        }}
      />
    </div>
  )
}

export default Range
