import DesignGuide from '@/components/globals/DesignGuide.tsx'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const guideRoutes: RouteObject[] = [
  // /guide → /guide/design
  { index: true, element: <Navigate to="/guide/design" replace /> },

  // Basics
  { path: 'design', element: <DesignGuide /> },
  { path: 'nav', element: <div>Navigation</div> },
  { path: 'quickstart', element: <div>Quick Start</div> },

  // Advanced
  { path: 'i18n', element: <div>Internationalization</div> },
  { path: 'migration', element: <div>Migration</div> },
  { path: 'theming', element: <div>Custom theme</div> },
  { path: 'dark-mode', element: <div>Dark Mode</div> },
  { path: 'namespace', element: <div>Custom namespace</div> },
  { path: 'ssr', element: <div>Server-Side Rendering(SSR)</div> },
  { path: 'transitions', element: <div>Built-in Transition</div> },
  { path: 'changelog', element: <div>Changelog</div> },

  // Development
  { path: 'dev-guide', element: <div>Local Development</div> },
  { path: 'dev-faq', element: <div>Development FAQ</div> },
  { path: 'commit-examples', element: <div>Commit Examples</div> },
  { path: 'translation', element: <div>Translation</div> }
]
