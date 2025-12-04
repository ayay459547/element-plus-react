import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/translation.md?raw'

const TranslationPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Translation</h1>
    </VPDocContent>
  )
}

export default TranslationPage
