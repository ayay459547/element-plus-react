import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/select.md?raw'

const SelectPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Select</h1>
    </VPDocContent>
  )
}

export default SelectPage
