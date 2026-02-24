import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElDrawer from '@ayay459547/element-plus-react/components/drawer/ElDrawer.tsx'
import { useState } from 'react'

const CustomizationContent: React.FC = () => {
  const [table, setTable] = useState(false)
  const [dialog, setDialog] = useState(false)

  const handleClose = () => {}

  return (
    <>
      <ElButton
        text
        onClick={() => {
          setTable(true)
        }}
      >
        Open Drawer with nested table
      </ElButton>
      <ElButton
        text
        onClick={() => {
          setDialog(true)
        }}
      >
        Open Drawer with nested form
      </ElButton>

      <ElDrawer
        visible={table}
        onVisible={setTable}
        title="I have a nested table inside!"
        direction="rtl"
        size="50%"
      >
        <div>ElTable (WIP)</div>
      </ElDrawer>
      <ElDrawer
        visible={dialog}
        onVisible={setDialog}
        title="I have a nested form inside!"
        beforeClose={handleClose}
        direction="ltr"
        className="demo-drawer"
      >
        <div className="demo-drawer__content">
          <div>ElForm (WIP)</div>
          <div>ElFormItem (WIP)</div>
        </div>
      </ElDrawer>
    </>
  )
}

export default CustomizationContent
