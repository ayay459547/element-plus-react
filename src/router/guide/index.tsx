import { Outlet } from 'react-router-dom'

export default function GuidePage() {
  return (
    <div className="guide-page">
      <div>side nav</div>
      <Outlet />
    </div>
  )
}
