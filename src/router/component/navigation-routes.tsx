import type { RouteObject } from 'react-router-dom'

import AffixPage from '@/pages/component/navigation/AffixPage.tsx'
import AnchorPage from '@/pages/component/navigation/AnchorPage.tsx'
import BacktopPage from '@/pages/component/navigation/BacktopPage.tsx'
import BreadcrumbPage from '@/pages/component/navigation/BreadcrumbPage.tsx'
import DropdownPage from '@/pages/component/navigation/DropdownPage.tsx'
import MenuPage from '@/pages/component/navigation/MenuPage.tsx'
import PageHeaderPage from '@/pages/component/navigation/PageHeaderPage.tsx'
import StepsPage from '@/pages/component/navigation/StepsPage.tsx'
import TabsPage from '@/pages/component/navigation/TabsPage.tsx'

export const navigationRoutes: RouteObject[] = [
  { path: 'affix', element: <AffixPage /> },
  { path: 'anchor', element: <AnchorPage /> },
  { path: 'backtop', element: <BacktopPage /> },
  { path: 'breadcrumb', element: <BreadcrumbPage /> },
  { path: 'dropdown', element: <DropdownPage /> },
  { path: 'menu', element: <MenuPage /> },
  { path: 'page-header', element: <PageHeaderPage /> },
  { path: 'steps', element: <StepsPage /> },
  { path: 'tabs', element: <TabsPage /> }
]
