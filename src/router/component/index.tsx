import { Outlet } from 'react-router-dom'

export default function ComponentPage() {
  return (
    <div className="component-page">
      <div>side nav</div>
      <Outlet />
    </div>
  )
}
