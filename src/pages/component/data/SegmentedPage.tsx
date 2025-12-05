import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/segmented.md?raw'

const SegmentedPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Segmented</h1>
    </VPDocContent>
  )
}

export default SegmentedPage
