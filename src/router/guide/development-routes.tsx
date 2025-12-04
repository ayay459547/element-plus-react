import CommitExamplesPage from '@/pages/guide/development/CommitExamplesPage.tsx'
import DevFAQPage from '@/pages/guide/development/DevFAQPage.tsx'
import DevGuidePage from '@/pages/guide/development/DevGuidePage.tsx'
import TranslationPage from '@/pages/guide/development/TranslationPage.tsx'
import type { RouteObject } from 'react-router-dom'

export const developmentRoutes: RouteObject[] = [
  { path: 'dev-guide', element: <DevGuidePage /> },
  { path: 'dev-faq', element: <DevFAQPage /> },
  { path: 'commit-examples', element: <CommitExamplesPage /> },
  { path: 'translation', element: <TranslationPage /> }
]
