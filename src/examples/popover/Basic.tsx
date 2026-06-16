import { ElButton, ElPopover } from '@ayay459547/element-plus-react'
import React from 'react'

const Basic = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ElPopover
        placement="top-start"
        title="Title"
        width={200}
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <ElButton>Hover to activate</ElButton>
      </ElPopover>

      <ElPopover
        placement="bottom"
        title="Title"
        width={200}
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <ElButton style={{ marginLeft: '20px' }}>Click to activate</ElButton>
      </ElPopover>

      <ElPopover
        placement="right"
        title="Title"
        width={200}
        trigger="focus"
        content="this is content, this is content, this is content"
      >
        <ElButton style={{ marginLeft: '20px' }}>Focus to activate</ElButton>
      </ElPopover>

      <ElPopover
        placement="bottom"
        title="Title"
        width={200}
        trigger="contextmenu"
        content="this is content, this is content, this is content"
      >
        <ElButton style={{ marginLeft: '20px' }}>Contextmenu to activate</ElButton>
      </ElPopover>
    </div>
  )
}

export default Basic
