import React from 'react'
import { ElScrollbar } from '@ayay459547/element-plus-react'

const Horizontal = () => {
  return (
    <ElScrollbar>
      <div style={{ display: 'flex', width: '2000px', height: '100px', padding: '10px', boxSizing: 'border-box' }}>
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: '100px',
              height: '100%',
              marginRight: '20px',
              backgroundColor: 'var(--el-color-primary-light-9)',
              color: 'var(--el-color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px'
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </ElScrollbar>
  )
}

export default Horizontal
