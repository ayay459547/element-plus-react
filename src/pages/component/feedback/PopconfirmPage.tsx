import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/popconfirm.md?raw'

const PopconfirmPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Popconfirm</h1>
    </VPDocContent>
  )
}

export default PopconfirmPage
