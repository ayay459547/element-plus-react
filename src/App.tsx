import VpNav from '@/components/navbar/VpNav.tsx'
import '@/styles/app.scss'
import '@/styles/css-vars.scss'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <VpNav />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
