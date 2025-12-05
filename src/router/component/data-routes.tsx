import type { RouteObject } from 'react-router-dom'

import AvatarPage from '@/pages/component/data/AvatarPage.tsx'

export const dataRoutes: RouteObject[] = [
  { path: 'avatar', element: <AvatarPage /> },
  { path: 'badge', element: <h1>Badge</h1> },
  { path: 'calendar', element: <h1>Calendar</h1> },
  { path: 'card', element: <h1>Card</h1> },
  { path: 'carousel', element: <h1>Carousel</h1> },
  { path: 'collapse', element: <h1>Collapse</h1> },
  { path: 'descriptions', element: <h1>Descriptions</h1> },
  { path: 'empty', element: <h1>Empty</h1> },
  { path: 'image', element: <h1>Image</h1> },
  { path: 'infinite-scroll', element: <h1>Infinite Scroll</h1> },
  { path: 'pagination', element: <h1>Pagination</h1> },
  { path: 'progress', element: <h1>Progress</h1> },
  { path: 'result', element: <h1>Result</h1> },
  { path: 'skeleton', element: <h1>Skeleton</h1> },
  { path: 'table', element: <h1>Table</h1> },
  { path: 'table-v2', element: <h1>Virtualized Table</h1> },
  { path: 'tag', element: <h1>Tag</h1> },
  { path: 'timeline', element: <h1>Timeline</h1> },
  { path: 'tour', element: <h1>Tour</h1> },
  { path: 'tree', element: <h1>Tree</h1> },
  { path: 'tree-v2', element: <h1>Tree V2 virtualized tree</h1> },
  { path: 'statistic', element: <h1>Statistic</h1> },
  { path: 'segmented', element: <h1>Segmented</h1> }
]
