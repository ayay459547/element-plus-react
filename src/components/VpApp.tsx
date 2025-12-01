import VPNav from '@/components/VPNav.tsx'
import VPSidebar from '@/components/VPSidebar.tsx'
import { useSidebar } from '@/hooks/sidebar'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'

export default function VPApp() {
  const { hasSidebar } = useSidebar()

  return (
    <div className="app">
      <VPNav />
      <VPSidebar />
      <main className={clsx('page-content', hasSidebar ? 'has-sidebar' : '')}>
        <Outlet />
      </main>
    </div>
  )
}
