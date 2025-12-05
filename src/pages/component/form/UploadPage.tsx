import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/upload.md?raw'

const UploadPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Upload</h1>
    </VPDocContent>
  )
}

export default UploadPage
