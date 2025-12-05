import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/typography.md?raw'

const TypographyPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Typography</h1>
    </VPDocContent>
  )
}

export default TypographyPage
