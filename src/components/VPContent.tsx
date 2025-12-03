import { useSidebar } from '@/hooks/sidebar'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'

const VPContent: React.FC = () => {
  const { hasSidebar } = useSidebar()

  return (
    <main className={clsx('page-content', hasSidebar ? 'has-sidebar' : '')}>
      <Outlet />
    </main>
  )
}

export default VPContent
