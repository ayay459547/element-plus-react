import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/namespace.md?raw'

const NamespacePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Custom namespace</h1>
    </VPDocContent>
  )
}

export default NamespacePage
