import React, { useState } from 'react'
import { ElDatePickerPanel } from '@ayay459547/element-plus-react'
import dayjs, { Dayjs } from 'dayjs'

const Basic = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())

  return (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <div>
        <h3>Basic Date Picker Panel</h3>
        <p>Selected Value: {value?.format('YYYY-MM-DD')}</p>
        <ElDatePickerPanel
          value={value}
          onPick={(val) => {
            console.log('Picked:', val)
            if (!Array.isArray(val)) {
              setValue(val)
            }
          }}
        />
      </div>

      <div>
        <h3>Month Picker Panel</h3>
        <ElDatePickerPanel
          type="month"
          onPick={(val) => {
             console.log('Month Picked:', val)
          }}
        />
      </div>

      <div>
        <h3>Year Picker Panel</h3>
        <ElDatePickerPanel
          type="year"
          onPick={(val) => {
             console.log('Year Picked:', val)
          }}
        />
      </div>
    </div>
  )
}

export default Basic
