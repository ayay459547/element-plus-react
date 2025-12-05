import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/result.md?raw'

const ResultPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Result</h1>
    </VPDocContent>
  )
}

export default ResultPage
