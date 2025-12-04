import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/commit-examples.md?raw'

const CommitExamplesPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Commit Examplestion</h1>
    </VPDocContent>
  )
}

export default CommitExamplesPage
