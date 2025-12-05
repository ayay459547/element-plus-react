import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/container.md?raw'

const ContainerPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Container</h1>
    </VPDocContent>
  )
}

export default ContainerPage
