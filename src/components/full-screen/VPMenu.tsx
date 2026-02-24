import { useNav } from '@/hooks/nav'
import VPMenuLink from './VPMenuLink.tsx'

interface VPMenuProps {
  onClose: () => void
}

const VPMenu: React.FC<VPMenuProps> = ({ onClose }) => {
  const navs = useNav()

  if (!navs) return null

  return (
    <nav className="full-screen-menu">
      {navs.map((item: any, index: number) => (
        <VPMenuLink key={index} item={item} onClick={() => onClose()} />
      ))}
    </nav>
  )
}

export default VPMenu
