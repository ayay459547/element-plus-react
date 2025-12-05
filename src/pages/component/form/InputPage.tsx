import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/input.md?raw'

const InputPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Input</h1>
    </VPDocContent>
  )
}

export default InputPage
