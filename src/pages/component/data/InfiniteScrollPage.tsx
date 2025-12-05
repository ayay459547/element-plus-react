import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/infinite-scroll.md?raw'

const InfiniteScrollPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>InfiniteScroll</h1>
    </VPDocContent>
  )
}

export default InfiniteScrollPage
