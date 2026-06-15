import React from 'react'
import { ElSpace, ElButton } from '@ayay459547/element-plus-react'

const Alignment: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <div>
        <p>center</p>
        <ElSpace alignment="center" style={{ padding: '8px', border: '1px solid #ccc' }}>
          <span>string</span>
          <ElButton>Button</ElButton>
          <div style={{ padding: '20px', background: '#f5f5f5' }}>Block</div>
        </ElSpace>
      </div>
      <div>
        <p>start</p>
        <ElSpace alignment="start" style={{ padding: '8px', border: '1px solid #ccc' }}>
          <span>string</span>
          <ElButton>Button</ElButton>
          <div style={{ padding: '20px', background: '#f5f5f5' }}>Block</div>
        </ElSpace>
      </div>
      <div>
        <p>end</p>
        <ElSpace alignment="end" style={{ padding: '8px', border: '1px solid #ccc' }}>
          <span>string</span>
          <ElButton>Button</ElButton>
          <div style={{ padding: '20px', background: '#f5f5f5' }}>Block</div>
        </ElSpace>
      </div>
    </div>
  )
}

export default Alignment
