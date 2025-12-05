import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/mention.md?raw'

const MentionPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Mention</h1>
    </VPDocContent>
  )
}

export default MentionPage
