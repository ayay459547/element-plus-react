import React from 'react'
import { ElDatePickerPanel } from '@ayay459547/element-plus-react'
import dayjs from 'dayjs'

const Disabled = () => {
  return (
    <div>
      <p>Disable weekends</p>
      <ElDatePickerPanel
        disabledDate={(date) => {
          const day = date.getDay()
          return day === 0 || day === 6
        }}
      />
    </div>
  )
}

export default Disabled
