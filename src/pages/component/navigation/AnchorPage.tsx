import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/anchor.md?raw'

const AnchorPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Anchor</h1>
    </VPDocContent>
  )
}

export default AnchorPage
