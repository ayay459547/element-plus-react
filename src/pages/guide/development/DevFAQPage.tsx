import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/dev-faq.md?raw'

const DevFAQPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Development FAQ</h1>
    </VPDocContent>
  )
}

export default DevFAQPage
