import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElDrawer from '@ayay459547/element-plus-react/components/drawer/ElDrawer.tsx'
import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import CircleCloseFilled from '@ayay459547/element-plus-react/icons-svg/circle-close-filled.svg?react'
import { useState } from 'react'

const CustomizationHeader: React.FC = () => {
  const [drawer, setDrawer] = useState(false)

  const close = () => {
    setDrawer(false)
  }

  return (
    <>
      <ElButton onClick={() => setDrawer(true)}>Open Drawer with customized header</ElButton>

      <ElDrawer
        visible={drawer}
        onVisible={setDrawer}
        size={'35%'}
        showClose={false}
        header={
          <>
            <h4>This is a custom header!</h4>
            <ElButton type="danger" onClick={close}>
              <ElIcon className="el-icon--left">
                <CircleCloseFilled />
              </ElIcon>
              Close
            </ElButton>
          </>
        }
      >
        This is drawer content.
      </ElDrawer>
    </>
  )
}

export default CustomizationHeader
