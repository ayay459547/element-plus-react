import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/datetime-picker.md?raw'

const DateTimePickerPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>DateTimePicker</h1>
    </VPDocContent>
  )
}

export default DateTimePickerPage
