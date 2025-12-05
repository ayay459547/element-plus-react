import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/message-box.md?raw'

const MessageBoxPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Message Box</h1>
    </VPDocContent>
  )
}

export default MessageBoxPage
