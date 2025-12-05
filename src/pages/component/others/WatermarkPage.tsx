import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/watermark.md?raw'

const WatermarkPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Watermark</h1>
    </VPDocContent>
  )
}

export default WatermarkPage
