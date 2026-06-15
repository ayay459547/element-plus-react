import React from 'react'
import { ElSpace, ElCard } from '@ayay459547/element-plus-react'

const Fill: React.FC = () => {
  return (
    <div style={{ padding: '20px', background: '#f5f7fa' }}>
      <ElSpace fill fillRatio={30} style={{ width: '100%' }}>
        <ElCard style={{ width: '100%' }}>Card 1</ElCard>
        <ElCard style={{ width: '100%' }}>Card 2</ElCard>
        <ElCard style={{ width: '100%' }}>Card 3</ElCard>
      </ElSpace>
    </div>
  )
}

export default Fill
