import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElDrawer from '@ayay459547/element-plus-react/components/drawer/ElDrawer.tsx'
import { useState } from 'react'

const DrawerBasicUsage: React.FC = () => {
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <ElButton type="primary" onClick={() => setDrawer(true)}>
        open
      </ElButton>

      <ElDrawer visible={drawer} onVisible={setDrawer} title="I am the title" withHeader={false}>
        Hi, there!
      </ElDrawer>
    </>
  )
}

export default DrawerBasicUsage
