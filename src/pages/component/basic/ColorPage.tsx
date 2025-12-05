import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/color.md?raw'

const ColorPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Color</h1>
    </VPDocContent>
  )
}

export default ColorPage
