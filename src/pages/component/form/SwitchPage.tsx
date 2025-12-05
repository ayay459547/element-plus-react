import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/switch.md?raw'

const SwitchPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Switch</h1>
    </VPDocContent>
  )
}

export default SwitchPage
