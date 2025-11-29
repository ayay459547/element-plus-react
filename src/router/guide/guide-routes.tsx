import DesignGuide from '@/components/globals/DesignGuide.tsx'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const guideRoutes: RouteObject[] = [
  // /guide → /guide/design
  { index: true, element: <Navigate to="/guide/design" replace /> },

  // Basics
  { path: 'design', element: <DesignGuide /> },
  { path: 'installation', element: <h1>Installation</h1> },
  { path: 'nav', element: <h1>Navigation</h1> },
  { path: 'quickstart', element: <h1>Quick Start</h1> },

  // Advanced
  { path: 'i18n', element: <h1>Internationalization</h1> },
  { path: 'migration', element: <h1>Migration</h1> },
  { path: 'theming', element: <h1>Custom theme</h1> },
  { path: 'dark-mode', element: <h1>Dark Mode</h1> },
  { path: 'namespace', element: <h1>Custom namespace</h1> },
  { path: 'ssr', element: <h1>Server-Side Rendering(SSR)</h1> },
  { path: 'transitions', element: <h1>Built-in Transition</h1> },
  { path: 'changelog', element: <h1>Changelog</h1> },

  // Development
  { path: 'dev-guide', element: <h1>Local Development</h1> },
  { path: 'dev-faq', element: <h1>Development FAQ</h1> },
  { path: 'commit-examples', element: <h1>Commit Examples</h1> },
  { path: 'translation', element: <h1>Translation</h1> }
]
