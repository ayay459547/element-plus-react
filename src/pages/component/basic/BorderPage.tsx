import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/border.md?raw'

const BorderPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Border</h1>
    </VPDocContent>
  )
}

export default BorderPage
