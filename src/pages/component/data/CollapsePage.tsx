import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/collapse.md?raw'

const CollapsePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Collapse</h1>
    </VPDocContent>
  )
}

export default CollapsePage
