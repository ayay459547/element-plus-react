import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/splitter.md?raw'

const SplitterPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Splitter</h1>
    </VPDocContent>
  )
}

export default SplitterPage
