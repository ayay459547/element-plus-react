import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/autocomplete.md?raw'

const AutocompletePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Autocomplete</h1>
    </VPDocContent>
  )
}

export default AutocompletePage
