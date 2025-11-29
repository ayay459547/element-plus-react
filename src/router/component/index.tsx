import { Outlet } from 'react-router-dom'

export default function ComponentPage() {
  return (
    <div className="component-page">
      <Outlet />
    </div>
  )
}
