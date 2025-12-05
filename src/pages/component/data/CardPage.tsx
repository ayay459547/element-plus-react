import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/card.md?raw'

const CardPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Card</h1>
    </VPDocContent>
  )
}

export default CardPage
