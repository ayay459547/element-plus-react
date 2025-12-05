import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/form.md?raw'

const FormPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Form</h1>
    </VPDocContent>
  )
}

export default FormPage
