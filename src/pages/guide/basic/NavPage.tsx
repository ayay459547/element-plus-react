import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/nav.md?raw'

const NavPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Navigation</h1>
    </VPDocContent>
  )
}

export default NavPage
