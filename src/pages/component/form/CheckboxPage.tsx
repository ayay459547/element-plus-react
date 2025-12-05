import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/checkbox.md?raw'

const CheckboxPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Checkbox</h1>
    </VPDocContent>
  )
}

export default CheckboxPage
