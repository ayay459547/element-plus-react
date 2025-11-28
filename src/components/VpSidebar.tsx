import VpSidebarLink from '@/components/sidebar/VpSidebarLink.tsx'
import { useSidebar } from '@/hooks/sidebar'
import { useEffect, useRef } from 'react'
import styles from './VpSidebar.module.scss'

type VpSidebarProps = {
  // open?: boolean
  // onClose?: () => void

  top?: React.ReactNode
  children?: React.ReactNode
  bottom?: React.ReactNode

  className?: string
  // style?: CSSProperties
} & React.HTMLAttributes<HTMLElement>

const VpSidebar: React.FC<VpSidebarProps> = ({ top, bottom }) => {
  const { sidebars, hasSidebar } = useSidebar()
  const asideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!asideRef.current) return
    if (sidebars.length === 0) return // 確保內容有渲染
    asideRef.current.scrollTo({ top: 0, behavior: 'auto' })
  }, [sidebars])

  if (!hasSidebar) return null

  return (
    <div className={styles['sidebar']}>
      <aside ref={asideRef}>
        {top}
        <div className={styles['sidebar-groups']}>
          {sidebars.map((item, key) => (
            <section key={key} className={styles['sidebar-group']}>
              <p className={styles['sidebar-group__title']}>{item.text}</p>
              {item.children.map((child, childKey) => (
                <VpSidebarLink key={childKey} item={child} />
              ))}
            </section>
          ))}
        </div>
        {bottom}
      </aside>
    </div>
  )
}

export default VpSidebar
