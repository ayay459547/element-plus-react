import type { RouteObject } from 'react-router-dom'

import DividerPage from '@/pages/component/others/DividerPage.tsx'
import WatermarkPage from '@/pages/component/others/WatermarkPage.tsx'

export const othersRoutes: RouteObject[] = [
  { path: 'divider', element: <DividerPage /> },
  { path: 'watermark', element: <WatermarkPage /> }
]
