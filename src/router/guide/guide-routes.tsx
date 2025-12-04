import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { advancedRoutes } from './advanced-routes.tsx'
import { basicRoutes } from './basic-routes.tsx'
import { developmentRoutes } from './development-routes.tsx'

export const guideRoutes: RouteObject[] = [
  // /guide → /guide/design
  { index: true, element: <Navigate to="/guide/design" replace /> },

  // Basics
  ...basicRoutes,

  // Advanced
  ...advancedRoutes,

  // Development
  ...developmentRoutes
]
