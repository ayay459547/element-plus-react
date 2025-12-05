import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/tree.md?raw'

const TreePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Tree</h1>
    </VPDocContent>
  )
}

export default TreePage
