import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/router/routes.tsx'

console.groupCollapsed('@ayay/element-plus-react')
console.table(import.meta.env)
console.groupEnd()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
