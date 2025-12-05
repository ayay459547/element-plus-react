import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/notification.md?raw'

const NotificationPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Notification</h1>
    </VPDocContent>
  )
}

export default NotificationPage
