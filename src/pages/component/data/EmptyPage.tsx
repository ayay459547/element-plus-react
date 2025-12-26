import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/empty.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import EmptyBasicUsage from '@/examples/empty/BasicUsage.tsx'

const EmptyPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="empty">Empty</h1>
      <p>Placeholder hints for empty states.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <VPDemo>
        <EmptyBasicUsage />
      </VPDemo>
    </VPDocContent>
  )
}

export default EmptyPage
