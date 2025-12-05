import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/steps.md?raw'

const StepsPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Steps</h1>
    </VPDocContent>
  )
}

export default StepsPage
