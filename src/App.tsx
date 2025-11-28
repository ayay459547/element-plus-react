import VpNav from '@/components/VpNav.tsx'
import VpSidebar from '@/components/VpSidebar.tsx'
import '@/styles/app.scss'
import '@/styles/css-vars.scss'
import { Outlet } from 'react-router-dom'
import 'uno.css'

function App() {
  return (
    <div className="app">
      <VpNav />
      <VpSidebar />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
