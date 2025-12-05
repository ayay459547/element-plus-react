import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/table.md?raw'

const TablePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Table</h1>
    </VPDocContent>
  )
}

export default TablePage
