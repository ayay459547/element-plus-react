import VPContent from '@/components/VPContent.tsx'
import VPNav from '@/components/VPNav.tsx'
import VPSidebar from '@/components/VPSidebar.tsx'

export default function VPApp() {
  return (
    <div className="app">
      <VPNav />
      <VPSidebar />
      <VPContent />
    </div>
  )
}
