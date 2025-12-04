import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/dark-mode.md?raw'

const DarkModePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Dark Mode</h1>
    </VPDocContent>
  )
}

export default DarkModePage
