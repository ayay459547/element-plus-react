import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/scrollbar.md?raw'

const ScrollbarPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Scrollbar</h1>
    </VPDocContent>
  )
}

export default ScrollbarPage
