import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/cascader.md?raw'

const CascaderPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Cascader</h1>
    </VPDocContent>
  )
}

export default CascaderPage
