import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/alert.md?raw'

const AlertPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Alert</h1>
    </VPDocContent>
  )
}

export default AlertPage
