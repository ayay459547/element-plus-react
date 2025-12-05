import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/button.md?raw'

const ButtonPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Button</h1>
    </VPDocContent>
  )
}

export default ButtonPage
