import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/message.md?raw'

const MessagePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Message</h1>
    </VPDocContent>
  )
}

export default MessagePage
