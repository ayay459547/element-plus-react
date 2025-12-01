import { useFullScreen } from '@/composables/fullscreen'
import { useToggleWidgets } from '@/composables/toggle-widgets'
// import { useSidebar } from '../composables/sidebar'
import { breakpoints } from '@/components/constant'
import VPNavbar from '@/components/VPNavbar.tsx'
import VPNavFull from '@/components/VPNavFull.tsx'

const VPNav: React.FC = () => {
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
      <VPNavbar fullScreen={isFullScreen} onToggle={toggleFullScreen} />
      <VPNavFull fullScreen={isFullScreen} onClose={close} />
    </header>
  )
}

export default VPNav
