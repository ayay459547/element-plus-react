import type { ReactNode, CSSProperties } from 'react'
import type { Dayjs } from 'dayjs'

/** 日期選擇器類型 */
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
  /** 綁定值 */
  value?: Dayjs | Dayjs[] | null
  /** 默認值 */
  defaultValue?: Dayjs | Dayjs[]
  /** 顯示類型 */
  type?: DatePickerType
  /** 禁用的日期判斷函數 */
  disabledDate?: (date: Date) => boolean
  /** 每週的第一天 */
  firstDayOfWeek?: number
  /** 格式化 */
  format?: string
  /** 自定義類名 */
  className?: string
  /** 自定義樣式 */
  style?: CSSProperties
  /** 選中日期時的回調 */
  onPick?: (date: Dayjs | Dayjs[], keepOpen?: boolean) => void
  /** 鼠標懸停日期時的回調（範圍選擇） */
  onSelect?: (date: Dayjs | Dayjs[]) => void
  /** 快捷選項 */
  shortcuts?: Array<{ text: string; value: Date | Date[] | (() => Date | Date[]) }>
  /** 是否顯示邊框 */
  border?: boolean
  /** 是否顯示底部操作欄 */
  showFooter?: boolean
  /** 是否解除面板聯動（範圍選擇） */
  unlinkPanels?: boolean
  /** 自定義單元格類名 */
  cellClassName?: (date: Date) => string
  
  // 範圍選擇相關狀態（通常由父組件傳入）
  /** 範圍開始日期 */
  minDate?: Dayjs | null
  /** 範圍結束日期 */
  maxDate?: Dayjs | null
  /** 範圍選擇狀態 */
  rangeState?: {
    /** 是否正在選擇中 */
    selecting: boolean
    /** 鼠標懸停的結束日期 */
    endDate: Dayjs | null
  }
  /** 當前顯示的月份日期 */
  viewDate?: Dayjs
  
  // 導航回調
  onPrevMonth?: () => void
  onNextMonth?: () => void
  onPrevYear?: () => void
  onNextYear?: () => void
}

export interface ElDatePickerPanelInstance {
  // 實例方法預留
}
