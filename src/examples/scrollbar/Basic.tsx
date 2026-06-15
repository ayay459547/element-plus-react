import React from 'react'
import { ElScrollbar } from '@ayay459547/element-plus-react'

const Basic = () => {
  return (
    <ElScrollbar height="400px">
      {Array.from({ length: 20 }).map((_, index) => (
        <p
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50px',
            margin: '10px',
            textAlign: 'center',
            borderRadius: '4px',
            backgroundColor: 'var(--el-color-primary-light-9)',
            color: 'var(--el-color-primary)'
          }}
        >
          {index + 1}
        </p>
      ))}
    </ElScrollbar>
  )
}

export default Basic
