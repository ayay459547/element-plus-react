import { createBrowserRouter, Navigate } from 'react-router-dom'

import App from '@/App.tsx'
import ParallaxHome from '@/components/globals/ParallaxHome.tsx'

import GuidePage from './guide'
import { guideRoutes } from './guide/guide-routes.tsx'

import ComponentPage from './component'
import { componentRoutes } from './component/component-routes.tsx'

import ResourcePage from './resource'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <ParallaxHome /> },
        {
          path: 'guide',
          element: <GuidePage />,
          children: guideRoutes
        },
        {
          path: 'component',
          element: <ComponentPage />,
          children: componentRoutes
        },
        { path: 'resource', element: <ResourcePage /> },
        // { path: 'playground', element: <div>Playground</div> }

        // catch-all for any unmatched nested path -> go home
        { path: '*', element: <Navigate to="/" replace /> }
      ]
    },
    // optionally catch top-level unmatched paths too
    { path: '*', element: <Navigate to="/" replace /> }
  ],
  {
    basename: import.meta.env.BASE_URL // Vite base
  }
)
