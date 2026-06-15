import React from 'react'
import { ElSplitter, ElSplitterPanel } from '@ayay459547/element-plus-react'

const Vertical = () => {
  return (
    <div style={{ height: '400px', border: '1px solid var(--el-border-color)' }}>
      <ElSplitter direction="vertical">
        <ElSplitterPanel size="50%">
          <div style={{ padding: '20px' }}>Top Panel</div>
        </ElSplitterPanel>
        <ElSplitterPanel>
          <div style={{ padding: '20px' }}>Bottom Panel</div>
        </ElSplitterPanel>
      </ElSplitter>
    </div>
  )
}

export default Vertical
