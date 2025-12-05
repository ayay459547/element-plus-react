import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/badge.md?raw'

const BadgePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Badge</h1>
    </VPDocContent>
  )
}

export default BadgePage
