import type { RouteObject } from 'react-router-dom'

import InfiniteScrollPage from '@/pages/component/data//InfiniteScrollPage.tsx'
import AvatarPage from '@/pages/component/data/AvatarPage.tsx'
import BadgePage from '@/pages/component/data/BadgePage.tsx'
import CalendarPage from '@/pages/component/data/CalendarPage.tsx'
import CardPage from '@/pages/component/data/CardPage.tsx'
import CarouselPage from '@/pages/component/data/CarouselPage.tsx'
import CollapsePage from '@/pages/component/data/CollapsePage.tsx'
import DescriptionsPage from '@/pages/component/data/DescriptionsPage.tsx'
import EmptyPage from '@/pages/component/data/EmptyPage.tsx'
import ImagePage from '@/pages/component/data/ImagePage.tsx'
import PaginationPage from '@/pages/component/data/PaginationPage.tsx'
import ProgressPage from '@/pages/component/data/ProgressPage.tsx'
import ResultPage from '@/pages/component/data/ResultPage.tsx'
import SegmentedPage from '@/pages/component/data/SegmentedPage.tsx'
import SkeletonPage from '@/pages/component/data/SkeletonPage.tsx'
import StatisticPage from '@/pages/component/data/StatisticPage.tsx'
import TablePage from '@/pages/component/data/TablePage.tsx'
import TableV2Page from '@/pages/component/data/TableV2Page.tsx'
import TagPage from '@/pages/component/data/TagPage.tsx'
import TimelinePage from '@/pages/component/data/TimelinePage.tsx'
import TourPage from '@/pages/component/data/TourPage.tsx'
import TreePage from '@/pages/component/data/TreePage.tsx'
import TreeV2Page from '@/pages/component/data/TreeV2Page.tsx'

export const dataRoutes: RouteObject[] = [
  { path: 'avatar', element: <AvatarPage /> },
  { path: 'badge', element: <BadgePage /> },
  { path: 'calendar', element: <CalendarPage /> },
  { path: 'card', element: <CardPage /> },
  { path: 'carousel', element: <CarouselPage /> },
  { path: 'collapse', element: <CollapsePage /> },
  { path: 'descriptions', element: <DescriptionsPage /> },
  { path: 'empty', element: <EmptyPage /> },
  { path: 'image', element: <ImagePage /> },
  { path: 'infinite-scroll', element: <InfiniteScrollPage /> },
  { path: 'pagination', element: <PaginationPage /> },
  { path: 'progress', element: <ProgressPage /> },
  { path: 'result', element: <ResultPage /> },
  { path: 'skeleton', element: <SkeletonPage /> },
  { path: 'table', element: <TablePage /> },
  { path: 'table-v2', element: <TableV2Page /> },
  { path: 'tag', element: <TagPage /> },
  { path: 'timeline', element: <TimelinePage /> },
  { path: 'tour', element: <TourPage /> },
  { path: 'tree', element: <TreePage /> },
  { path: 'tree-v2', element: <TreeV2Page /> },
  { path: 'statistic', element: <StatisticPage /> },
  { path: 'segmented', element: <SegmentedPage /> }
]
