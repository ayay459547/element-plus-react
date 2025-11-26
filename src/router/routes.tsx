import { createBrowserRouter, Navigate } from 'react-router-dom'

import App from '@/App.tsx'
import ParallaxHome from '@/components/globals/ParallaxHome.tsx'

import ComponentPage from './component'
import GuidePage from './guide'
import ResourcePage from './resource'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '', element: <ParallaxHome /> },
        { path: 'guide', element: <GuidePage /> },
        { path: 'component', element: <ComponentPage /> },
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
    basename: import.meta.env.BASE_URL // 自動對應 Vite base
  }
)
