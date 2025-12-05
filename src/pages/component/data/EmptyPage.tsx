import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/empty.md?raw'

const EmptyPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Empty</h1>
    </VPDocContent>
  )
}

export default EmptyPage
