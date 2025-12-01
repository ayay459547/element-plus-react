import VPFooter from '@/components/globals/VPFooter'
import { Outlet } from 'react-router-dom'

export default function GuidePage() {
  return (
    <div className="guide-page">
      <Outlet />
      <VPFooter />
    </div>
  )
}
