import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const componentRoutes: RouteObject[] = [
  // //component → /component/overview
  { index: true, element: <Navigate to="/component/overview" replace /> },

  // Overview
  { path: 'overview', element: <h1>Overview</h1> },

  // Basic
  { path: 'button', element: <h1>Button</h1> },
  { path: 'border', element: <h1>Border</h1> },
  { path: 'color', element: <h1>Color</h1> },
  { path: 'container', element: <h1>Container</h1> },
  { path: 'icon', element: <h1>Icon</h1> },
  { path: 'layout', element: <h1>Layout</h1> },
  { path: 'link', element: <h1>Link</h1> },
  { path: 'text', element: <h1>Text</h1> },
  { path: 'scrollbar', element: <h1>Scrollbar</h1> },
  { path: 'space', element: <h1>Space</h1> },
  { path: 'splitter', element: <h1>Splitter</h1> },
  { path: 'typography', element: <h1>Typography</h1> },

  // Configuration
  { path: 'config-provider', element: <h1>Config Provider</h1> },

  // Form
  { path: 'autocomplete', element: <h1>Autocomplete</h1> },
  { path: 'cascader', element: <h1>Cascader</h1> },
  { path: 'checkbox', element: <h1>Checkbox</h1> },
  { path: 'color-picker-panel', element: <h1>ColorPickerPanel</h1> },
  { path: 'color-picker', element: <h1>ColorPicker</h1> },
  { path: 'date-picker-panel', element: <h1>DatePickerPanel</h1> },
  { path: 'date-picker', element: <h1>DatePicker</h1> },
  { path: 'datetime-picker', element: <h1>DateTimePicker</h1> },
  { path: 'form', element: <h1>Form</h1> },
  { path: 'input', element: <h1>Input</h1> },
  { path: 'input-number', element: <h1>Input Number</h1> },
  { path: 'input-tag', element: <h1>Input Tag</h1> },
  { path: 'mention', element: <h1>Mention</h1> },
  { path: 'radio', element: <h1>Radio</h1> },
  { path: 'rate', element: <h1>Rate</h1> },
  { path: 'select', element: <h1>Select</h1> },
  { path: 'select-v2', element: <h1>Virtualized Select</h1> },
  { path: 'slider', element: <h1>Slider</h1> },
  { path: 'switch', element: <h1>Switch</h1> },
  { path: 'time-picker', element: <h1>TimePicker</h1> },
  { path: 'time-select', element: <h1>TimeSelect</h1> },
  { path: 'transfer', element: <h1>Transfer</h1> },
  { path: 'tree-select', element: <h1>TreeSelect</h1> },
  { path: 'upload', element: <h1>Upload</h1> },

  // Data
  { path: 'avatar', element: <h1>Avatar</h1> },
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
  { path: 'segmented', element: <h1>Segmented</h1> },

  // Navigation
  { path: 'affix', element: <h1>Affix</h1> },
  { path: 'anchor', element: <h1>Anchor</h1> },
  { path: 'backtop', element: <h1>Backtop</h1> },
  { path: 'breadcrumb', element: <h1>Breadcrumb</h1> },
  { path: 'dropdown', element: <h1>Dropdown</h1> },
  { path: 'menu', element: <h1>Menu</h1> },
  { path: 'page-header', element: <h1>Page Header</h1> },
  { path: 'steps', element: <h1>Steps</h1> },
  { path: 'tabs', element: <h1>Tabs</h1> },

  // Feedback
  { path: 'alert', element: <h1>Alert</h1> },
  { path: 'dialog', element: <h1>Dialog</h1> },
  { path: 'drawer', element: <h1>Drawer</h1> },
  { path: 'loading', element: <h1>Loading</h1> },
  { path: 'message', element: <h1>Message</h1> },
  { path: 'message-box', element: <h1>Message Box</h1> },
  { path: 'notification', element: <h1>Notification</h1> },
  { path: 'popconfirm', element: <h1>Popconfirm</h1> },
  { path: 'popover', element: <h1>Popover</h1> },
  { path: 'tooltip', element: <h1>Tooltip</h1> },

  // Others
  { path: 'divider', element: <h1>Divider</h1> },
  { path: 'watermark', element: <h1>Watermark</h1> }
]
