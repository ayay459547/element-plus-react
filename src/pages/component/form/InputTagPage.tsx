import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/input-tag.md?raw'

const InputTagPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Input Tag</h1>
    </VPDocContent>
  )
}

export default InputTagPage
