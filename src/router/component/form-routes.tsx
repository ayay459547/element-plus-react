import type { RouteObject } from 'react-router-dom'

import AutocompletePage from '@/pages/component/form/AutocompletePage.tsx'
import CascaderPage from '@/pages/component/form/CascaderPage.tsx'
import CheckboxPage from '@/pages/component/form/CheckboxPage.tsx'
import ColorPickerPage from '@/pages/component/form/ColorPickerPage.tsx'
import ColorPickerPanelPage from '@/pages/component/form/ColorPickerPanelPage.tsx'
import DatePickerPage from '@/pages/component/form/DatePickerPage.tsx'
import DatePickerPanelPage from '@/pages/component/form/DatePickerPanelPage.tsx'
import DateTimePickerPage from '@/pages/component/form/DateTimePickerPage.tsx'
import FormPage from '@/pages/component/form/FormPage.tsx'
import InputNumberPage from '@/pages/component/form/InputNumberPage.tsx'
import InputPage from '@/pages/component/form/InputPage.tsx'
import InputTagPage from '@/pages/component/form/InputTagPage.tsx'
import MentionPage from '@/pages/component/form/MentionPage.tsx'
import RadioPage from '@/pages/component/form/RadioPage.tsx'
import RatePage from '@/pages/component/form/RatePage.tsx'
import SelectPage from '@/pages/component/form/SelectPage.tsx'
import SelectV2Page from '@/pages/component/form/SelectV2Page.tsx'
import SliderPage from '@/pages/component/form/SliderPage.tsx'
import SwitchPage from '@/pages/component/form/SwitchPage.tsx'
import TimePickerPage from '@/pages/component/form/TimePickerPage.tsx'
import TimeSelectPage from '@/pages/component/form/TimeSelectPage.tsx'
import TransferPage from '@/pages/component/form/TransferPage.tsx'
import TreeSelectPage from '@/pages/component/form/TreeSelectPage.tsx'
import UploadPage from '@/pages/component/form/UploadPage.tsx'

export const formRoutes: RouteObject[] = [
  { path: 'autocomplete', element: <AutocompletePage /> },
  { path: 'cascader', element: <CascaderPage /> },
  { path: 'checkbox', element: <CheckboxPage /> },
  { path: 'color-picker-panel', element: <ColorPickerPanelPage /> },
  { path: 'color-picker', element: <ColorPickerPage /> },
  { path: 'date-picker-panel', element: <DatePickerPanelPage /> },
  { path: 'date-picker', element: <DatePickerPage /> },
  { path: 'datetime-picker', element: <DateTimePickerPage /> },
  { path: 'form', element: <FormPage /> },
  { path: 'input', element: <InputPage /> },
  { path: 'input-number', element: <InputNumberPage /> },
  { path: 'input-tag', element: <InputTagPage /> },
  { path: 'mention', element: <MentionPage /> },
  { path: 'radio', element: <RadioPage /> },
  { path: 'rate', element: <RatePage /> },
  { path: 'select', element: <SelectPage /> },
  { path: 'select-v2', element: <SelectV2Page /> },
  { path: 'slider', element: <SliderPage /> },
  { path: 'switch', element: <SwitchPage /> },
  { path: 'time-picker', element: <TimePickerPage /> },
  { path: 'time-select', element: <TimeSelectPage /> },
  { path: 'transfer', element: <TransferPage /> },
  { path: 'tree-select', element: <TreeSelectPage /> },
  { path: 'upload', element: <UploadPage /> }
]
