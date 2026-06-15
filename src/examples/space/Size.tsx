import React, { useState } from 'react'
import { ElSpace, ElButton, ElRadioGroup, ElRadioButton } from '@ayay459547/element-plus-react'

const Size: React.FC = () => {
  const [size, setSize] = useState<'small' | 'default' | 'large'>('default')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <ElRadioGroup value={size} onChange={(val: any) => setSize(val)}>
          <ElRadioButton value="small">Small</ElRadioButton>
          <ElRadioButton value="default">Default</ElRadioButton>
          <ElRadioButton value="large">Large</ElRadioButton>
        </ElRadioGroup>
      </div>
      <ElSpace size={size}>
        <ElButton>Button</ElButton>
        <ElButton>Button</ElButton>
        <ElButton>Button</ElButton>
      </ElSpace>
    </div>
  )
}

export default Size
