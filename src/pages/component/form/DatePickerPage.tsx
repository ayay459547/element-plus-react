import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/date-picker.md?raw'

const DatePickerPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>DatePicker</h1>
    </VPDocContent>
  )
}

export default DatePickerPage
