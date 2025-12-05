import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/affix.md?raw'

const DividerPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Affix</h1>
    </VPDocContent>
  )
}

export default DividerPage
