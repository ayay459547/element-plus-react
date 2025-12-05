import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/text.md?raw'

const TextPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Text</h1>
    </VPDocContent>
  )
}

export default TextPage
