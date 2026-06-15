import React, { useMemo } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isoWeek from 'dayjs/plugin/isoWeek'
import clsx from 'clsx'
import { useNamespace } from '../../../hooks/useNamespace'
import { WEEK_DAYS } from '../../../constants/date'

dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)

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
  selectionMode?: 'date' | 'week' | 'month' | 'year' | 'dates'
  firstDayOfWeek?: number
  cellClassName?: (date: Date) => string
}

const DateTable: React.FC<DateTableProps> = (props) => {
  const {
    date,
    value,
    onPick,
    disabledDate,
    minDate,
    maxDate,
    rangeState,
    onSelect,
    selectionMode = 'date',
    firstDayOfWeek = 7,
    cellClassName
  } = props
  const ns = useNamespace('date-table')
  const nsCell = useNamespace('date-table-cell')

  const offsetDay = (firstDayOfWeek % 7) || 0
  // 計算當前月曆視圖的第一天
  const startDate = date.startOf('month').startOf('week').add(offsetDay, 'day')
  
  const rows = []
  let count = 0
  
  for (let i = 0; i < 6; i++) {
    const row = []
    if (selectionMode === 'week') {
      row.push({
        type: 'week',
        text: startDate.add(count, 'day').week()
      })
    }

    for (let j = 0; j < 7; j++) {
      const cellDate = startDate.add(count, 'day')
      const isCurrentMonth = cellDate.month() === date.month()
      const isToday = cellDate.isSame(dayjs(), 'day')
      
      let isSelected = false
      let inRange = false
      let start = false
      let end = false

      if (Array.isArray(value)) {
        isSelected = value.some(v => v && v.isSame(cellDate, 'day'))
      } else if (value) {
        isSelected = value.isSame(cellDate, 'day')
      }

      if (minDate && maxDate) {
        start = cellDate.isSame(minDate, 'day')
        end = cellDate.isSame(maxDate, 'day')
        inRange = cellDate.isAfter(minDate, 'day') && cellDate.isBefore(maxDate, 'day')
      } else if (minDate && rangeState?.selecting && rangeState.endDate) {
        const rangeStart = minDate.isBefore(rangeState.endDate) ? minDate : rangeState.endDate
        const rangeEnd = minDate.isBefore(rangeState.endDate) ? rangeState.endDate : minDate
        start = cellDate.isSame(rangeStart, 'day')
        end = cellDate.isSame(rangeEnd, 'day')
        inRange = cellDate.isAfter(rangeStart, 'day') && cellDate.isBefore(rangeEnd, 'day')
      } else if (minDate) {
        start = cellDate.isSame(minDate, 'day')
      }

      const disabled = disabledDate?.(cellDate.toDate())
      const customClass = cellClassName?.(cellDate.toDate())

      row.push({
        date: cellDate,
        isCurrentMonth,
        isToday,
        isSelected,
        inRange,
        start,
        end,
        disabled,
        customClass,
        type: 'normal'
      })
      count++
    }
    rows.push(row)
  }

  const WEEKS = useMemo(() => {
    const days = [...WEEK_DAYS]
    for (let i = 0; i < offsetDay; i++) {
      days.push(days.shift()!)
    }
    return days
  }, [offsetDay])

  return (
    <table className={clsx(ns.b(), { [ns.m('week-mode')]: selectionMode === 'week' })} cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          {selectionMode === 'week' && <th className={ns.e('week-header')}></th>}
          {WEEKS.map((week) => (
            <th key={week}>{week}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={clsx(ns.e('row'), {
              'current': row.some(cell => cell.type === 'normal' && cell.isSelected)
            })}
          >
            {row.map((cell, cellIndex) => {
              if (cell.type === 'week') {
                return <td key={cellIndex} className="week">{cell.text}</td>
              }
              return (
                <td
                  key={cellIndex}
                  className={clsx(cell.customClass, {
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
                  <div className={nsCell.b()}>
                    <span className={nsCell.e('text')}>
                      {cell.date.date()}
                    </span>
                  </div>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DateTable
