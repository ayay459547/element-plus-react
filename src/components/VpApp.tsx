import VpNav from '@/components/VpNav.tsx'
import VpSidebar from '@/components/VpSidebar.tsx'
import { useSidebar } from '@/hooks/sidebar'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'

export default function VpApp() {
  const { hasSidebar } = useSidebar()

  return (
    <div className="app">
      <VpNav />
      <VpSidebar />
      <main className={clsx('page-content', hasSidebar ? 'has-sidebar' : '')}>
        <Outlet />
      </main>
    </div>
  )
}
