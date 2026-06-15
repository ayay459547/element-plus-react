import React, { useState } from 'react'
import { ElDatePickerPanel } from '@ayay459547/element-plus-react'
import dayjs, { Dayjs } from 'dayjs'

const Border = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <p>With Border (Default)</p>
        <ElDatePickerPanel
          value={value}
          onPick={(val) => !Array.isArray(val) && setValue(val)}
        />
      </div>
      <div>
        <p>Without Border (Implementation pending in SCSS/Props)</p>
        {/* Note: I need to add 'border' prop support to ElDatePickerPanel if I want to match EP exactly */}
        <ElDatePickerPanel
          value={value}
          onPick={(val) => !Array.isArray(val) && setValue(val)}
        />
      </div>
    </div>
  )
}

export default Border
