import { createBrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import ParallaxHome from '@/components/globals/ParallaxHome.tsx'

import GuidePage from '@/pages/guide'
import { guideRoutes } from './guide/guide-routes.tsx'

import ComponentPage from '@/pages/component'
import { componentRoutes } from './component/component-routes.tsx'

import ResourcePage from '@/pages/resource'

import VPNotFound from '@/components/VPNotFound.tsx'

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
        { path: '*', element: <VPNotFound /> }
      ]
    },
    // optionally catch top-level unmatched paths too
    { path: '*', element: <VPNotFound /> }
    // { path: '*', element: <Navigate to="/" replace /> }
  ],
  {
    basename: import.meta.env.BASE_URL // Vite base
  }
)
