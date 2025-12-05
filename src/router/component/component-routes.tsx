import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { basicRoutes } from './basic-routes.tsx'
import { dataRoutes } from './data-routes.tsx'
import { feedbackRoutes } from './feedback-routes.tsx'
import { formRoutes } from './form-routes.tsx'
import { navigationRoutes } from './navigation-routes.tsx'
import { othersRoutes } from './others-routes.tsx'

import ConfigProviderPage from '@/pages/component/ConfigProviderPage.tsx'

export const componentRoutes: RouteObject[] = [
  // //component → /component/overview
  { index: true, element: <Navigate to="/component/overview" replace /> },

  // Overview
  { path: 'overview', element: <h1>Overview</h1> },

  // Basic
  ...basicRoutes,

  // Configuration
  { path: 'config-provider', element: <ConfigProviderPage /> },

  // Form
  ...formRoutes,

  // Data
  ...dataRoutes,

  // Navigation
  ...navigationRoutes,

  // Feedback
  ...feedbackRoutes,

  // Others
  ...othersRoutes
]
