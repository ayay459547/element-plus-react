import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/progress.md?raw'

const ProgressPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Progress</h1>
    </VPDocContent>
  )
}

export default ProgressPage
