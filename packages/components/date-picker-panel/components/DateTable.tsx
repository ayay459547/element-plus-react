import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../../hooks/useNamespace'

export interface DateTableProps {
  date: Dayjs
  value?: Dayjs | Dayjs[] | null
  defaultValue?: Dayjs | Dayjs[]
  disabledDate?: (date: Date) => boolean
  onPick?: (date: Dayjs) => void
  minDate?: Dayjs | null
  maxDate?: Dayjs | null
  rangeState?: {
    selecting: boolean
    endDate: Dayjs | null
  }
  onSelect?: (date: Dayjs) => void
}

const DateTable: React.FC<DateTableProps> = (props) => {
  const { date, value, onPick, disabledDate, minDate, maxDate, rangeState, onSelect } = props
  const ns = useNamespace('date-table')

  // 計算當前月曆視圖的第一天（通常是上個月的最後幾天）
  const startDate = date.startOf('month').startOf('week')
  
  const rows = []
  let count = 0
  // 生成 6 行 7 列的日期矩陣
  for (let i = 0; i < 6; i++) {
    const row = []
    for (let j = 0; j < 7; j++) {
      const cellDate = startDate.add(count, 'day')
      const isCurrentMonth = cellDate.month() === date.month()
      const isToday = cellDate.isSame(dayjs(), 'day')
      
      let isSelected = false
      let inRange = false
      let start = false
      let end = false

      // 判斷單選或多選的選中狀態
      if (Array.isArray(value)) {
        isSelected = value.some(v => v.isSame(cellDate, 'day'))
      } else if (value) {
        isSelected = value.isSame(cellDate, 'day')
      }

      // 處理範圍選擇的高亮邏輯
      if (minDate && maxDate) {
        // 已選定範圍
        start = cellDate.isSame(minDate, 'day')
        end = cellDate.isSame(maxDate, 'day')
        inRange = cellDate.isAfter(minDate, 'day') && cellDate.isBefore(maxDate, 'day')
      } else if (minDate && rangeState?.selecting && rangeState.endDate) {
        // 正在選擇中，且鼠標有懸停日期
        const rangeStart = minDate.isBefore(rangeState.endDate) ? minDate : rangeState.endDate
        const rangeEnd = minDate.isBefore(rangeState.endDate) ? rangeState.endDate : minDate
        start = cellDate.isSame(rangeStart, 'day')
        end = cellDate.isSame(rangeEnd, 'day')
        inRange = cellDate.isAfter(rangeStart, 'day') && cellDate.isBefore(rangeEnd, 'day')
      } else if (minDate) {
        // 僅選中了開始日期
        start = cellDate.isSame(minDate, 'day')
      }

      const disabled = disabledDate?.(cellDate.toDate())

      row.push({
        date: cellDate,
        isCurrentMonth,
        isToday,
        isSelected,
        inRange,
        start,
        end,
        disabled
      })
      count++
    }
    rows.push(row)
  }

  const WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

  return (
    <table className={ns.b()} cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          {WEEKS.map((week) => (
            <th key={week}>{week}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={ns.e('row')}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={clsx(ns.e('cell'), {
                  'available': cell.isCurrentMonth,
                  'today': cell.isToday,
                  'current': cell.isSelected || cell.start || cell.end,
                  'prev-month': !cell.isCurrentMonth && cell.date.isBefore(date, 'month'),
                  'next-month': !cell.isCurrentMonth && cell.date.isAfter(date, 'month'),
                  'disabled': cell.disabled,
                  'in-range': cell.inRange,
                  'start-date': cell.start,
                  'end-date': cell.end
                })}
                onClick={() => !cell.disabled && onPick?.(cell.date)}
                onMouseEnter={() => !cell.disabled && onSelect?.(cell.date)}
              >
                <div className={ns.e('cell-inner')}>
                  {cell.date.date()}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DateTable
