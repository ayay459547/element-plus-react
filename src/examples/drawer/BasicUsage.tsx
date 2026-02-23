import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElDrawer from '@ayay459547/element-plus-react/components/drawer/ElDrawer.tsx'
import type { ElDrawerProps } from '@ayay459547/element-plus-react/components/drawer/types'
import ElRadio from '@ayay459547/element-plus-react/components/radio/ElRadio.tsx'
import ElRadioGroup from '@ayay459547/element-plus-react/components/radio/ElRadioGroup.tsx'
import { useState } from 'react'

const DrawerBasicUsage: React.FC = () => {
  const [direction, setDirection] = useState<ElDrawerProps['direction']>('rtl')

  const [drawer, setDrawer] = useState(false)
  const [drawer2, setDrawer2] = useState(false)

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

      <ElDrawer value={drawer} direction={direction} onValue={setDrawer}>
        123
      </ElDrawer>
      <ElDrawer value={drawer2} direction={direction} onValue={setDrawer2}>
        456
      </ElDrawer>
    </>
  )
}

export default DrawerBasicUsage
