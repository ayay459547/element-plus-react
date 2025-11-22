import { useFullScreen } from '@/composables/fullscreen'
import { useToggleWidgets } from '@/composables/toggle-widgets'
// import { useSidebar } from '../composables/sidebar'
import { breakpoints } from '@/components/constant'
import VpNavFull from '@/components/navbar//VpNavFull.tsx'
import VpNavbar from '@/components/navbar/VpNavbar.tsx'

export default function Navbar() {
  // const { hasSidebar } = useSidebar()
  const hasSidebar = false
  const { toggleFullScreen, isFullScreen } = useFullScreen()

  const close = () => toggleFullScreen(false)

  // React hook 取代 useToggleWidgets（觀察 isFullScreen）
  useToggleWidgets(isFullScreen, () => {
    if (window.outerWidth >= breakpoints.md) {
      close()
    }
  })

  return (
    <header className={`navbar ${hasSidebar ? 'has-sidebar' : ''}`}>
      <VpNavbar fullScreen={isFullScreen} onToggle={toggleFullScreen} />
      <VpNavFull fullScreen={isFullScreen} onClose={close} />
    </header>
  )
}
