import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/changelog.md?raw'

const ChangelogPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Changelog</h1>
    </VPDocContent>
  )
}

export default ChangelogPage
