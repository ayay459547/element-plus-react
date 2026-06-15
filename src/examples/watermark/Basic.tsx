import React from 'react'
import { ElWatermark } from '@ayay459547/element-plus-react'

const Basic = () => {
  return (
    <ElWatermark content="Element Plus React">
      <div style={{ height: '500px' }}>
        <p>
          The Watermark component is used to add a text or image watermark to the background of a container.
        </p>
        <p>
          It can be used to protect the content of a page from being copied or to show the status of a document.
        </p>
      </div>
    </ElWatermark>
  )
}

export default Basic
