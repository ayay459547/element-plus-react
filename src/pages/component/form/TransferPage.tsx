import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/transfer.md?raw'

const TransferPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Transfer</h1>
    </VPDocContent>
  )
}

export default TransferPage
