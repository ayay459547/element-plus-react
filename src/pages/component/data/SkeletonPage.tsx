import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/skeleton.md?raw'

const SkeletonPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Skeleton</h1>
    </VPDocContent>
  )
}

export default SkeletonPage
