import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/time-select.md?raw'

const TimeSelectPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>TimeSelect</h1>
    </VPDocContent>
  )
}

export default TimeSelectPage
