import DesignPage from '@/pages/guide/basic/DesignPage.tsx'
import InstallationPage from '@/pages/guide/basic/InstallationPage.tsx'
import NavPage from '@/pages/guide/basic/NavPage.tsx'
import QuickStartPage from '@/pages/guide/basic/QuickStartPage.tsx'
import type { RouteObject } from 'react-router-dom'

export const basicRoutes: RouteObject[] = [
  { path: 'design', element: <DesignPage /> },
  { path: 'installation', element: <InstallationPage /> },
  { path: 'nav', element: <NavPage /> },
  { path: 'quickstart', element: <QuickStartPage /> }
]
