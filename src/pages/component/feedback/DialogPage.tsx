import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/dialog.md?raw'

const DialogPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Dialog</h1>
    </VPDocContent>
  )
}

export default DialogPage
