import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/tree-select.md?raw'

const TreeSelectPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>TreeSelect</h1>
    </VPDocContent>
  )
}

export default TreeSelectPage
