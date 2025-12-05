import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/input-number.md?raw'

const InputNumberPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Input Number</h1>
    </VPDocContent>
  )
}

export default InputNumberPage
