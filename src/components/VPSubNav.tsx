// import { useBackTop } from '@/hooks/useBackTop'
import { useSidebar } from '@/hooks/useSidebar'
// import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import clsx from 'clsx'
// import { CSSTransition } from 'react-transition-group'
import ToggleSidebarBtn from './subnav/ToggleSidebarBtn.tsx'
import './VPSubNav.scss'

interface VPSubNavProps {
  isSidebarOpen: boolean
  onOpenMenu: () => void
}

const VPSubNav: React.FC<VPSubNavProps> = ({ isSidebarOpen, onOpenMenu }) => {
  const { hasSidebar } = useSidebar()
  // const { shouldShow, scrollToTop } = useBackTop()

  return (
    <div className={clsx('py-3', 'flex', 'items-center', 'sub-nav')}>
      {hasSidebar && (
        <ToggleSidebarBtn aria-expanded={isSidebarOpen} onClick={() => onOpenMenu()} />
      )}
      {/* <CSSTransition in={shouldShow} name="shifting" timeout={500}>
        <ElButton
          link
          className={clsx('height-5', 'go-back-top', shouldShow ? 'show' : '')}
          onClick={scrollToTop}
        >
          Back to top
        </ElButton>
      </CSSTransition> */}
    </div>
  )
}

export default VPSubNav
