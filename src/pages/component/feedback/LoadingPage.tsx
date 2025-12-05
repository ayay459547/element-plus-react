import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/loading.md?raw'

const LoadingPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Loading</h1>
    </VPDocContent>
  )
}

export default LoadingPage
