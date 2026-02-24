import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElDrawer from '@ayay459547/element-plus-react/components/drawer/ElDrawer.tsx'
import type { ElDrawerProps } from '@ayay459547/element-plus-react/components/drawer/types'
import ElRadio from '@ayay459547/element-plus-react/components/radio/ElRadio.tsx'
import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const DrawerNoTitle: React.FC = () => {
  const [direction, setDirection] = useState<ElDrawerProps['direction']>('rtl')

  const [radio1, setRadio1] = useState('Option 1')

  const [drawer, setDrawer] = useState(false)
  const [drawer2, setDrawer2] = useState(false)

  const cancelClick = () => {
    setDrawer2(false)
  }
  const confirmClick = () => {
    setDrawer2(false)
  }
  return (
    <>
      <ElRadioGroup value={direction} onChange={(e) => setDirection(e.target.value)}>
        <ElRadio value="ltr">left to right</ElRadio>
        <ElRadio value="rtl">right to left</ElRadio>
        <ElRadio value="ttb">top to bottom</ElRadio>
        <ElRadio value="btt">bottom to top</ElRadio>
      </ElRadioGroup>

      <ElButton type="primary" style={{ marginLeft: '16px' }} onClick={() => setDrawer(true)}>
        open
      </ElButton>
      <ElButton type="primary" style={{ marginLeft: '16px' }} onClick={() => setDrawer2(true)}>
        with footer
      </ElButton>

      <ElDrawer visible={drawer} onVisible={setDrawer} title="I am the title" direction={direction}>
        Hi, there!
      </ElDrawer>
      <ElDrawer
        visible={drawer2}
        onVisible={setDrawer2}
        direction={direction}
        header={<h4>set title by slot</h4>}
        footer={
          <div style={{ flex: 'auto' }}>
            <ElButton onClick={cancelClick}>cancel</ElButton>
            <ElButton type="primary" onClick={confirmClick}>
              confirm
            </ElButton>
          </div>
        }
      >
        <ElRadioGroup value={radio1} onChange={(e) => setRadio1(e.target.value)}>
          <ElRadio value="Option 1" size="large">
            Option 1
          </ElRadio>
          <ElRadio value="Option 2" size="large">
            Option 2
          </ElRadio>
        </ElRadioGroup>
      </ElDrawer>
    </>
  )
}

export default DrawerNoTitle
