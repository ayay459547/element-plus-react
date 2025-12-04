import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/migration.md?raw'

const MigrationPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Migration</h1>
    </VPDocContent>
  )
}

export default MigrationPage
