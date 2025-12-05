import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/radio.md?raw'

const RadioPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Radio</h1>
    </VPDocContent>
  )
}

export default RadioPage
