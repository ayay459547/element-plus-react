import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/dropdown.md?raw'

const DropdownPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Dropdown</h1>
    </VPDocContent>
  )
}

export default DropdownPage
