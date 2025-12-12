import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import ElButtonGroup from '@ayay/element-plus-react/components/button/ElButtonGroup.tsx'
import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'

import ArrowLeft from '@element-plus/icons-svg/arrow-left.svg?react'
import ArrowRight from '@element-plus/icons-svg/arrow-right.svg?react'

import House from '@element-plus/icons-svg/house.svg?react'
import Notification from '@element-plus/icons-svg/Notification.svg?react'
import Operation from '@element-plus/icons-svg/operation.svg?react'

const ButtonGroup: React.FC = () => {
  return (
    <>
      <ElButtonGroup className="mb-4">
        <ElButton type="primary" icon={<ArrowLeft />}>
          Previous Page
        </ElButton>
        <ElButton type="primary">
          Next Page
          <ElIcon className="el-icon--right">
            <ArrowRight />
          </ElIcon>
        </ElButton>
      </ElButtonGroup>

      <br />

      <ElButtonGroup direction="horizontal" className="mb-4">
        <ElButton type="primary" icon={<House />} />
        <ElButton type="primary" icon={<Operation />} />
        <ElButton type="primary" icon={<Notification />} />
      </ElButtonGroup>

      <br />

      <ElButtonGroup direction="vertical">
        <ElButton type="primary" icon={<House />} />
        <ElButton type="primary" icon={<Operation />} />
        <ElButton type="primary" icon={<Notification />} />
      </ElButtonGroup>
    </>
  )
}

export default ButtonGroup
