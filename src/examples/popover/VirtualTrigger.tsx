import { ElButton, ElPopover } from '@ayay459547/element-plus-react'
import React, { useRef } from 'react'

const VirtualTrigger = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div style={{ padding: '20px' }}>
      <ElButton ref={buttonRef}>I am the virtual trigger</ElButton>
      
      <ElPopover
        virtualRef={buttonRef}
        virtualTriggering
        title="Title"
        width={200}
        trigger="hover"
        content="this is content, this is content, this is content"
      />
    </div>
  )
}

export default VirtualTrigger
