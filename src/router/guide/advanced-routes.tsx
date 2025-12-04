import ChangelogPage from '@/pages/guide/advanced/ChangelogPage.tsx'
import DarkModePage from '@/pages/guide/advanced/DarkModePage.tsx'
import I18nPage from '@/pages/guide/advanced/I18nPage.tsx'
import MigrationPage from '@/pages/guide/advanced/MigrationPage.tsx'
import NamespacePage from '@/pages/guide/advanced/NamespacePage.tsx'
import SSRPage from '@/pages/guide/advanced/SSRPage.tsx'
import ThemingPage from '@/pages/guide/advanced/ThemingPage.tsx'
import TransitionsPage from '@/pages/guide/advanced/TransitionsPage.tsx'
import type { RouteObject } from 'react-router-dom'

export const advancedRoutes: RouteObject[] = [
  { path: 'i18n', element: <I18nPage /> },
  { path: 'migration', element: <MigrationPage /> },
  { path: 'theming', element: <ThemingPage /> },
  { path: 'dark-mode', element: <DarkModePage /> },
  { path: 'namespace', element: <NamespacePage /> },
  { path: 'ssr', element: <SSRPage /> },
  { path: 'transitions', element: <TransitionsPage /> },
  { path: 'changelog', element: <ChangelogPage /> }
]
