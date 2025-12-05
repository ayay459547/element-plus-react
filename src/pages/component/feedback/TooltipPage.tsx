import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/tooltip.md?raw'

const TooltipPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Tooltip</h1>
    </VPDocContent>
  )
}

export default TooltipPage
