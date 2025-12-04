import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/dev-guide.md?raw'

const DevGuidePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Local Development</h1>
    </VPDocContent>
  )
}

export default DevGuidePage
