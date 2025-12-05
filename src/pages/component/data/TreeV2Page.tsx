import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/tree-v2.md?raw'

const TreeV2Page: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>TreeV2</h1>
    </VPDocContent>
  )
}

export default TreeV2Page
