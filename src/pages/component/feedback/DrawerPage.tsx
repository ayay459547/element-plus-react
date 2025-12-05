import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/drawer.md?raw'

const DrawerPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Drawer</h1>
    </VPDocContent>
  )
}

export default DrawerPage
