import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/select-v2.md?raw'

const SelectV2Page: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Virtualized Select</h1>
    </VPDocContent>
  )
}

export default SelectV2Page
