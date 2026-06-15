import React from 'react'
import { ElWatermark } from '@ayay459547/element-plus-react'

const MultiLine = () => {
  return (
    <ElWatermark content={['Element Plus React', 'Alpha Version']}>
      <div style={{ height: '500px' }}>
        <p>You can pass an array of strings to the content prop to render multiple lines of text.</p>
      </div>
    </ElWatermark>
  )
}

export default MultiLine
