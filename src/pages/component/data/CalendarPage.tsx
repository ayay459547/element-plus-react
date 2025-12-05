import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/calendar.md?raw'

const CalendarPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Calendar</h1>
    </VPDocContent>
  )
}

export default CalendarPage
