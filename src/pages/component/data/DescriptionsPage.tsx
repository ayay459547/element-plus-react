import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/descriptions.md?raw'

const DescriptionsPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Descriptions</h1>
    </VPDocContent>
  )
}

export default DescriptionsPage
