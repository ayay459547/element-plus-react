import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/slider.md?raw'

const SliderPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Slider</h1>
    </VPDocContent>
  )
}

export default SliderPage
