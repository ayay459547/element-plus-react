import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/transitions.md?raw'

const TransitionsPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Built-in Transition</h1>
    </VPDocContent>
  )
}

export default TransitionsPage
