import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/page-header.md?raw'

const PageHeaderPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Page Header</h1>
    </VPDocContent>
  )
}

export default PageHeaderPage
