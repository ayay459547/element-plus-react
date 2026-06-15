import React from 'react'
import { ElWatermark } from '@ayay459547/element-plus-react'

const Image = () => {
  return (
    <ElWatermark
      image="https://element-plus.org/images/element-plus-logo.svg"
      width={120}
      height={64}
      rotate={-22}
    >
      <div style={{ height: '500px' }}>
        <p>You can use an image as a watermark by passing the image URL to the image prop.</p>
      </div>
    </ElWatermark>
  )
}

export default Image
