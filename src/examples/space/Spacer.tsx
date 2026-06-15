import React from 'react'
import { ElSpace, ElButton } from '@ayay459547/element-plus-react'

const Spacer: React.FC = () => {
  return (
    <ElSpace spacer={<span style={{ color: '#ccc' }}>|</span>}>
      <ElButton>Button</ElButton>
      <ElButton>Button</ElButton>
      <ElButton>Button</ElButton>
    </ElSpace>
  )
}

export default Spacer
