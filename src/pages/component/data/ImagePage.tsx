import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/image.md?raw'

const ImagePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Image</h1>
    </VPDocContent>
  )
}

export default ImagePage
