import React, { useState } from 'react'
import { ElDatePickerPanel } from '@ayay459547/element-plus-react'
import dayjs, { Dayjs } from 'dayjs'

const EnterDate: React.FC = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ElDatePickerPanel
        value={value}
        onPick={(val) => {
          if (!Array.isArray(val)) {
            setValue(val)
          }
        }}
      />
    </div>
  )
}

export default EnterDate
