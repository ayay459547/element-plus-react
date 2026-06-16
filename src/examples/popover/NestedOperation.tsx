import { ElButton, ElPopover } from '@ayay459547/element-plus-react'
import React, { useRef } from 'react'
import type { ElPopoverInstance } from '@ayay459547/element-plus-react'

const NestedOperation = () => {
  const popoverRef = useRef<ElPopoverInstance>(null)

  const handleNo = () => {
    popoverRef.current?.hide()
  }

  const handleYes = () => {
    popoverRef.current?.hide()
  }

  return (
    <div style={{ padding: '20px' }}>
      <ElPopover
        ref={popoverRef}
        placement="top"
        width={160}
        trigger="click"
        content={
          <div style={{ textAlign: 'right', margin: 0 }}>
            <p>Are you sure to delete this?</p>
            <ElButton size="small" text onClick={handleNo}>
              cancel
            </ElButton>
            <ElButton size="small" type="primary" onClick={handleYes}>
              confirm
            </ElButton>
          </div>
        }
      >
        <ElButton>Delete</ElButton>
      </ElPopover>
    </div>
  )
}

export default NestedOperation
