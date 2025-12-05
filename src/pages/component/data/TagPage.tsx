import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/tag.md?raw'

const TagPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Tag</h1>
    </VPDocContent>
  )
}

export default TagPage
