import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/color-picker.md?raw'

const ColorPickerPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>ColorPicker</h1>
    </VPDocContent>
  )
}

export default ColorPickerPage
