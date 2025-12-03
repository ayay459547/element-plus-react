import type { RouteObject } from 'react-router-dom'

export const feedbackRoutes: RouteObject[] = [
  { path: 'alert', element: <h1>Alert</h1> },
  { path: 'dialog', element: <h1>Dialog</h1> },
  { path: 'drawer', element: <h1>Drawer</h1> },
  { path: 'loading', element: <h1>Loading</h1> },
  { path: 'message', element: <h1>Message</h1> },
  { path: 'message-box', element: <h1>Message Box</h1> },
  { path: 'notification', element: <h1>Notification</h1> },
  { path: 'popconfirm', element: <h1>Popconfirm</h1> },
  { path: 'popover', element: <h1>Popover</h1> },
  { path: 'tooltip', element: <h1>Tooltip</h1> }
]
