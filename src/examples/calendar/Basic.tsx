import React, { useState } from 'react'
import { ElCalendar } from '@ayay459547/element-plus-react'
import dayjs, { Dayjs } from 'dayjs'

const Basic: React.FC = () => {
  const [value, setValue] = useState(dayjs())

  return (
    <div style={{ padding: '20px' }}>
      <ElCalendar
        value={value}
        onChange={(val) => {
          console.log('Changed to:', val.format('YYYY-MM-DD'))
          setValue(val)
        }}
      />
    </div>
  )
}

export default Basic
