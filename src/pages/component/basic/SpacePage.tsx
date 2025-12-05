import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/space.md?raw'

const SpacePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Space</h1>
    </VPDocContent>
  )
}

export default SpacePage
