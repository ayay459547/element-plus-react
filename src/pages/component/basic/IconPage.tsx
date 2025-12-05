import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/icon.md?raw'

const IconPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Icon</h1>
    </VPDocContent>
  )
}

export default IconPage
