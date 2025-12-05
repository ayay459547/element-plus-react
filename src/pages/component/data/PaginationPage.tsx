import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/pagination.md?raw'

const PaginationPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Pagination</h1>
    </VPDocContent>
  )
}

export default PaginationPage
