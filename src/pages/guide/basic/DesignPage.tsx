import DesignGuide from '@/components/globals/DesignGuide.tsx'
import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/design.md?raw'

const DesignPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <DesignGuide />
    </VPDocContent>
  )
}

export default DesignPage
