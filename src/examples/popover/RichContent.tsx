import { ElButton, ElPopover } from '@ayay459547/element-plus-react'
import React from 'react'

const RichContent = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ElPopover
        placement="right"
        title="Title"
        width={200}
        trigger="click"
        content={
          <div>
            <p>This is some rich content.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        }
      >
        <ElButton>Click to activate</ElButton>
      </ElPopover>
    </div>
  )
}

export default RichContent
