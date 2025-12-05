import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/tour.md?raw'

const TourPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Tour</h1>
    </VPDocContent>
  )
}

export default TourPage
