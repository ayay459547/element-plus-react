import { useFullScreen } from '@/composables/fullscreen'
import { useToggleWidgets } from '@/composables/toggle-widgets'
// import { useSidebar } from '../composables/sidebar'
import { breakpoints } from '@/components/constant'
import VpNavbar from '@/components/VpNavbar.tsx'
import VpNavFull from '@/components/VpNavFull.tsx'

const VpNav: React.FC = () => {
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

export default VpNav
