import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/popover.md?raw'

const PopoverPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Popover</h1>
    </VPDocContent>
  )
}

export default PopoverPage
