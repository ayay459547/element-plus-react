import type { Dayjs } from 'dayjs'

export type CalendarDateType = 'prev-month' | 'next-month' | 'prev-year' | 'next-year' | 'today'

export interface CalendarProps {
  /** 綁定值 */
  value?: Date | string | number | Dayjs
  /** 範圍 */
  range?: [Date, Date] | [string, string] | [number, number] | [Dayjs, Dayjs]
  /** 每週的第一天 */
  firstDayOfWeek?: number
  /** 自定義類名 */
  className?: string
  /** 自定義樣式 */
  style?: React.CSSProperties
  /** 選中日期時的回調 */
  onChange?: (date: Dayjs) => void
  /** 自定義單元格內容 */
  dateCellRender?: (data: {
    date: Dayjs
    type: 'prev-month' | 'current-month' | 'next-month'
    isSelected: boolean
    day: string
  }) => React.ReactNode
  /** 自定義頭部內容 */
  headerRender?: (data: {
    date: string
    selectDate: (type: CalendarDateType) => void
  }) => React.ReactNode
}

export interface ElCalendarInstance {
  /** 選擇日期 */
  selectDate: (type: CalendarDateType) => void
  /** 選中特定日期 */
  pickDay: (day: Dayjs) => void
  /** 當前日期 */
  selectedDay: Dayjs
}
