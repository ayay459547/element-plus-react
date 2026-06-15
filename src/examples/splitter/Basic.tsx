import React from 'react'
import { ElSplitter, ElSplitterPanel } from '@ayay459547/element-plus-react'

const Basic = () => {
  return (
    <div style={{ height: '400px', border: '1px solid var(--el-border-color)' }}>
      <ElSplitter>
        <ElSplitterPanel size="30%" min={100}>
          <div style={{ padding: '20px' }}>Left Panel</div>
        </ElSplitterPanel>
        <ElSplitterPanel>
          <div style={{ padding: '20px' }}>Right Panel</div>
        </ElSplitterPanel>
      </ElSplitter>
    </div>
  )
}

export default Basic
