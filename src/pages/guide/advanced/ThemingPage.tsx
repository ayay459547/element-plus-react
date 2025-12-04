import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/theming.md?raw'

const ThemingPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Custom theme</h1>
    </VPDocContent>
  )
}

export default ThemingPage
