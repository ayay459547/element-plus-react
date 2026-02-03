import VPContent from '@/components/VPContent.tsx'
import VPNav from '@/components/VPNav.tsx'
import VPSidebar from '@/components/VPSidebar.tsx'
import VPSubNav from '@/components/VPSubNav.tsx'
import { useSidebar } from '@/hooks/useSidebar'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function VPApp() {
  const { pathname } = useLocation()

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
      <VPNav />
      <VPSidebar />
      {hasSidebar && (
        <VPSubNav isSidebarOpen={isSidebarOpen} onOpenMenu={() => toggleSidebar(true)} />
      )}
      <VPContent />
    </div>
  )
}
