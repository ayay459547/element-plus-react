import React from 'react'
import { ElCalendar } from '@ayay459547/element-plus-react'

const CustomContent: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ElCalendar
        dateCellRender={(data) => {
          return (
            <p className={data.isSelected ? 'is-selected' : ''}>
              {data.day.split('-').slice(1).join('-')}
              {data.isSelected ? '✔️' : ''}
            </p>
          )
        }}
      />
    </div>
  )
}

export default CustomContent
