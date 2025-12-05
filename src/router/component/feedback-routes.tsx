import type { RouteObject } from 'react-router-dom'

import AlertPage from '@/pages/component/feedback/AlertPage.tsx'
import DialogPage from '@/pages/component/feedback/DialogPage.tsx'
import DrawerPage from '@/pages/component/feedback/DrawerPage.tsx'
import LoadingPage from '@/pages/component/feedback/LoadingPage.tsx'
import MessageBoxPage from '@/pages/component/feedback/MessageBoxPage.tsx'
import MessagePage from '@/pages/component/feedback/MessagePage.tsx'
import NotificationPage from '@/pages/component/feedback/NotificationPage.tsx'
import PopconfirmPage from '@/pages/component/feedback/PopconfirmPage.tsx'
import PopoverPage from '@/pages/component/feedback/PopoverPage.tsx'
import TooltipPage from '@/pages/component/feedback/TooltipPage.tsx'

export const feedbackRoutes: RouteObject[] = [
  { path: 'alert', element: <AlertPage /> },
  { path: 'dialog', element: <DialogPage /> },
  { path: 'drawer', element: <DrawerPage /> },
  { path: 'loading', element: <LoadingPage /> },
  { path: 'message', element: <MessagePage /> },
  { path: 'message-box', element: <MessageBoxPage /> },
  { path: 'notification', element: <NotificationPage /> },
  { path: 'popconfirm', element: <PopconfirmPage /> },
  { path: 'popover', element: <PopoverPage /> },
  { path: 'tooltip', element: <TooltipPage /> }
]
