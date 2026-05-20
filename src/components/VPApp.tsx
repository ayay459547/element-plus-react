import RouterProgress from '@/components/globals/RouterProgress.tsx'
import VPContent from '@/components/VPContent.tsx'
import VPNav from '@/components/VPNav.tsx'
import VPOverlay from '@/components/VPOverlay.tsx'
import VPSidebar from '@/components/VPSidebar.tsx'
import VPSubNav from '@/components/VPSubNav.tsx'
import { usePageTitle } from '@/hooks/usePageTitle'
import { useSidebar } from '@/hooks/useSidebar'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function VPApp() {
  const { pathname } = useLocation()
  usePageTitle()

  const [isSidebarOpen, toggleSidebar] = useState(false)
  const { hasSidebar } = useSidebar()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // 或 'smooth'
    })
  }, [pathname])

  return (
    <div className="app">
      <RouterProgress />

      <VPOverlay show={isSidebarOpen} onClick={() => toggleSidebar(false)} />
      <VPNav />
      {hasSidebar && (
        <VPSubNav isSidebarOpen={isSidebarOpen} onOpenMenu={() => toggleSidebar(true)} />
      )}
      <VPSidebar open={isSidebarOpen} onClose={() => toggleSidebar(false)} />

      <VPContent />
    </div>
  )
}
