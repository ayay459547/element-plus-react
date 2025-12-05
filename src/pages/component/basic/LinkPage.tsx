import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/link.md?raw'

const LinkPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Link</h1>
    </VPDocContent>
  )
}

export default LinkPage
