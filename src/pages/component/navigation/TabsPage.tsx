import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/tabs.md?raw'

const TabsPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Tabs</h1>
    </VPDocContent>
  )
}

export default TabsPage
