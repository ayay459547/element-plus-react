import VPSidebarLink from '@/components/sidebar/VPSidebarLink.tsx'
import { useSidebar } from '@/hooks/useSidebar'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import './VPSidebar.scss'

type VPSidebarProps = {
  open: boolean
  onClose: () => void

  top?: React.ReactNode
  children?: React.ReactNode
  bottom?: React.ReactNode

  className?: string
  // style?: CSSProperties
} & React.HTMLAttributes<HTMLElement>

const VPSidebar: React.FC<VPSidebarProps> = ({ open, onClose, top, bottom }) => {
  const { sidebars, hasSidebar } = useSidebar()
  const asideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (asideRef.current && sidebars.length > 0) {
      asideRef.current.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [sidebars])

  if (!hasSidebar) return null

  return (
    <div className={clsx('sidebar', open ? 'open' : '')}>
      <aside ref={asideRef}>
        {top}
        <div className="sidebar-groups">
          {sidebars.map((item, key) => (
            <section key={key} className="sidebar-group">
              <p className="sidebar-group__title">{item.text}</p>
              {item.children.map((child, childKey) => (
                <VPSidebarLink key={childKey} item={child} onClick={() => onClose()} />
              ))}
            </section>
          ))}
        </div>
        {bottom}
      </aside>
    </div>
  )
}

export default VPSidebar
