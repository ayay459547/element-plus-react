import BorderPage from '@/pages/component/basic/BorderPage.tsx'
import ButtonPage from '@/pages/component/basic/ButtonPage.tsx'
import ColorPage from '@/pages/component/basic/ColorPage.tsx'
import ContainerPage from '@/pages/component/basic/ContainerPage.tsx'
import IconPage from '@/pages/component/basic/IconPage.tsx'
import LayoutPage from '@/pages/component/basic/LayoutPage.tsx'
import LinkPage from '@/pages/component/basic/LinkPage.tsx'
import ScrollbarPage from '@/pages/component/basic/ScrollbarPage.tsx'
import SpacePage from '@/pages/component/basic/SpacePage.tsx'
import SplitterPage from '@/pages/component/basic/SplitterPage.tsx'
import TextPage from '@/pages/component/basic/TextPage.tsx'
import TypographyPage from '@/pages/component/basic/TypographyPage.tsx'
import type { RouteObject } from 'react-router-dom'

export const basicRoutes: RouteObject[] = [
  { path: 'button', element: <ButtonPage /> },
  { path: 'border', element: <BorderPage /> },
  { path: 'color', element: <ColorPage /> },
  { path: 'container', element: <ContainerPage /> },
  { path: 'icon', element: <IconPage /> },
  { path: 'layout', element: <LayoutPage /> },
  { path: 'link', element: <LinkPage /> },
  { path: 'text', element: <TextPage /> },
  { path: 'scrollbar', element: <ScrollbarPage /> },
  { path: 'space', element: <SpacePage /> },
  { path: 'splitter', element: <SplitterPage /> },
  { path: 'typography', element: <TypographyPage /> }
]
