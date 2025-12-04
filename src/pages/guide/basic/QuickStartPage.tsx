import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/quickstart.md?raw'

const QuickStartPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Quick Start</h1>
    </VPDocContent>
  )
}

export default QuickStartPage
