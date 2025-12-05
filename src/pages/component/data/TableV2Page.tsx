import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/table-v2.md?raw'

const TableV2Page: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>TableV2</h1>
    </VPDocContent>
  )
}

export default TableV2Page
