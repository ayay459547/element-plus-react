import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/rate.md?raw'

const RatePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Rate</h1>
    </VPDocContent>
  )
}

export default RatePage
