import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/breadcrumb.md?raw'

const BreadcrumbPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Breadcrumb</h1>
    </VPDocContent>
  )
}

export default BreadcrumbPage
