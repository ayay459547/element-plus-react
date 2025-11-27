import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const componentRoutes: RouteObject[] = [
  // //component → /component/overview
  { index: true, element: <Navigate to="/component/overview" replace /> },

  // Overview
  { path: 'overview', element: <div>Overview</div> },

  // Basic
  { path: 'button', element: <div>Button</div> },
  { path: 'border', element: <div>Border</div> },
  { path: 'color', element: <div>Color</div> },
  { path: 'container', element: <div>Container</div> },
  { path: 'icon', element: <div>Icon</div> },
  { path: 'layout', element: <div>Layout</div> },
  { path: 'link', element: <div>Link</div> },
  { path: 'text', element: <div>Text</div> },
  { path: 'scrollbar', element: <div>Scrollbar</div> },
  { path: 'space', element: <div>Space</div> },
  { path: 'splitter', element: <div>Splitter</div> },
  { path: 'typography', element: <div>Typography</div> },

  // Configuration
  { path: 'config-provider', element: <div>Config Provider</div> },

  // Form
  { path: 'autocomplete', element: <div>Autocomplete</div> },
  { path: 'cascader', element: <div>Cascader</div> },
  { path: 'checkbox', element: <div>Checkbox</div> },
  { path: 'color-picker-panel', element: <div>ColorPickerPanel</div> },
  { path: 'color-picker', element: <div>ColorPicker</div> },
  { path: 'date-picker-panel', element: <div>DatePickerPanel</div> },
  { path: 'date-picker', element: <div>DatePicker</div> },
  { path: 'datetime-picker', element: <div>DateTimePicker</div> },
  { path: 'form', element: <div>Form</div> },
  { path: 'input', element: <div>Input</div> },
  { path: 'input-number', element: <div>Input Number</div> },
  { path: 'input-tag', element: <div>Input Tag</div> },
  { path: 'mention', element: <div>Mention</div> },
  { path: 'radio', element: <div>Radio</div> },
  { path: 'rate', element: <div>Rate</div> },
  { path: 'select', element: <div>Select</div> },
  { path: 'select-v2', element: <div>Virtualized Select</div> },
  { path: 'slider', element: <div>Slider</div> },
  { path: 'switch', element: <div>Switch</div> },
  { path: 'time-picker', element: <div>TimePicker</div> },
  { path: 'time-select', element: <div>TimeSelect</div> },
  { path: 'transfer', element: <div>Transfer</div> },
  { path: 'tree-select', element: <div>TreeSelect</div> },
  { path: 'upload', element: <div>Upload</div> },

  // Data
  { path: 'avatar', element: <div>Avatar</div> },
  { path: 'badge', element: <div>Badge</div> },
  { path: 'calendar', element: <div>Calendar</div> },
  { path: 'card', element: <div>Card</div> },
  { path: 'carousel', element: <div>Carousel</div> },
  { path: 'collapse', element: <div>Collapse</div> },
  { path: 'descriptions', element: <div>Descriptions</div> },
  { path: 'empty', element: <div>Empty</div> },
  { path: 'image', element: <div>Image</div> },
  { path: 'infinite-scroll', element: <div>Infinite Scroll</div> },
  { path: 'pagination', element: <div>Pagination</div> },
  { path: 'progress', element: <div>Progress</div> },
  { path: 'result', element: <div>Result</div> },
  { path: 'skeleton', element: <div>Skeleton</div> },
  { path: 'table', element: <div>Table</div> },
  { path: 'table-v2', element: <div>Virtualized Table</div> },
  { path: 'tag', element: <div>Tag</div> },
  { path: 'timeline', element: <div>Timeline</div> },
  { path: 'tour', element: <div>Tour</div> },
  { path: 'tree', element: <div>Tree</div> },
  { path: 'tree-v2', element: <div>Tree V2 virtualized tree</div> },
  { path: 'statistic', element: <div>Statistic</div> },
  { path: 'segmented', element: <div>Segmented</div> },

  // Navigation
  { path: 'affix', element: <div>Affix</div> },
  { path: 'anchor', element: <div>Anchor</div> },
  { path: 'backtop', element: <div>Backtop</div> },
  { path: 'breadcrumb', element: <div>Breadcrumb</div> },
  { path: 'dropdown', element: <div>Dropdown</div> },
  { path: 'menu', element: <div>Menu</div> },
  { path: 'page-header', element: <div>Page Header</div> },
  { path: 'steps', element: <div>Steps</div> },
  { path: 'tabs', element: <div>Tabs</div> },

  // Feedback
  { path: 'alert', element: <div>Alert</div> },
  { path: 'dialog', element: <div>Dialog</div> },
  { path: 'drawer', element: <div>Drawer</div> },
  { path: 'loading', element: <div>Loading</div> },
  { path: 'message', element: <div>Message</div> },
  { path: 'message-box', element: <div>Message Box</div> },
  { path: 'notification', element: <div>Notification</div> },
  { path: 'popconfirm', element: <div>Popconfirm</div> },
  { path: 'popover', element: <div>Popover</div> },
  { path: 'tooltip', element: <div>Tooltip</div> },

  // Others
  { path: 'divider', element: <div>Divider</div> },
  { path: 'watermark', element: <div>Watermark</div> }
]
