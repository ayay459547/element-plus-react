import VPContent from '@/components/VPContent.tsx'
import VPNav from '@/components/VPNav.tsx'
import VPSidebar from '@/components/VPSidebar.tsx'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function VPApp() {
  const { pathname } = useLocation()

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
      <VPContent />
    </div>
  )
}
