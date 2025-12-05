import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/time-picker.md?raw'

const TimePickerPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>TimePicker</h1>
    </VPDocContent>
  )
}

export default TimePickerPage
