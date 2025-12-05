import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/backtop.md?raw'

const BacktopPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Backtop</h1>
    </VPDocContent>
  )
}

export default BacktopPage
