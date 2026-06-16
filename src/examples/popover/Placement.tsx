import { ElButton, ElPopover } from '@ayay459547/element-plus-react'
import React from 'react'
import './Placement.scss'

const Placement = () => {
  return (
    <div className="example-popover-placement">
      <div className="top">
        <ElPopover
          placement="top-start"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>top-start</ElButton>
        </ElPopover>
        <ElPopover
          placement="top"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>top</ElButton>
        </ElPopover>
        <ElPopover
          placement="top-end"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>top-end</ElButton>
        </ElPopover>
      </div>
      <div className="left">
        <ElPopover
          placement="left-start"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>left-start</ElButton>
        </ElPopover>
        <ElPopover
          placement="left"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>left</ElButton>
        </ElPopover>
        <ElPopover
          placement="left-end"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>left-end</ElButton>
        </ElPopover>
      </div>
      <div className="right">
        <ElPopover
          placement="right-start"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>right-start</ElButton>
        </ElPopover>
        <ElPopover
          placement="right"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>right</ElButton>
        </ElPopover>
        <ElPopover
          placement="right-end"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>right-end</ElButton>
        </ElPopover>
      </div>
      <div className="bottom">
        <ElPopover
          placement="bottom-start"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>bottom-start</ElButton>
        </ElPopover>
        <ElPopover
          placement="bottom"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>bottom</ElButton>
        </ElPopover>
        <ElPopover
          placement="bottom-end"
          title="Title"
          width={200}
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <ElButton>bottom-end</ElButton>
        </ElPopover>
      </div>
    </div>
  )
}

export default Placement
