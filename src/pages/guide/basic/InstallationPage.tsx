import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/installation.md?raw'

const InstallationPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Installation</h1>
    </VPDocContent>
  )
}

export default InstallationPage
