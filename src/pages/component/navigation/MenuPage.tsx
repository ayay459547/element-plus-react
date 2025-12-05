import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/menu.md?raw'

const MenuPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Menu</h1>
    </VPDocContent>
  )
}

export default MenuPage
