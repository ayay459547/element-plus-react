import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/i18n.md?raw'

const I18nPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Internationalization</h1>
    </VPDocContent>
  )
}

export default I18nPage
