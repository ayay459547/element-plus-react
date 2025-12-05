import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/layout.md?raw'

const LayoutPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Layout</h1>
    </VPDocContent>
  )
}

export default LayoutPage
