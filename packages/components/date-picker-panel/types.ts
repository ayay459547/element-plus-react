import type { ReactNode, CSSProperties } from 'react'
import type { Dayjs } from 'dayjs'

export type DatePickerType =
  | 'year'
  | 'month'
  | 'date'
  | 'dates'
  | 'week'
  | 'datetime'
  | 'datetimerange'
  | 'daterange'
  | 'monthrange'

export interface DatePickerPanelProps {
  value?: Dayjs | Dayjs[] | null
  defaultValue?: Dayjs | Dayjs[]
  type?: DatePickerType
  disabledDate?: (date: Date) => boolean
  format?: string
  className?: string
  style?: CSSProperties
  onPick?: (date: Dayjs | Dayjs[], keepOpen?: boolean) => void
  onSelect?: (date: Dayjs | Dayjs[]) => void
  shortcuts?: Array<{ text: string; value: Date | (() => Date) }>
  border?: boolean
  showFooter?: boolean
  unlinkPanels?: boolean
  // Range related
  minDate?: Dayjs | null
  maxDate?: Dayjs | null
  rangeState?: {
    selecting: boolean
    endDate: Dayjs | null
  }
  viewDate?: Dayjs
  onPrevMonth?: () => void
  onNextMonth?: () => void
  onPrevYear?: () => void
  onNextYear?: () => void
}

export interface ElDatePickerPanelInstance {
  // Add instance methods if needed
}
