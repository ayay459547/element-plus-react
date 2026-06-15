import React from 'react'
import { ElCalendar } from '@ayay459547/element-plus-react'
import dayjs from 'dayjs'

const Range: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ElCalendar 
        range={[
          dayjs().startOf('week').toDate(),
          dayjs().startOf('week').add(13, 'day').toDate()
        ]} 
      />
    </div>
  )
}

export default Range
