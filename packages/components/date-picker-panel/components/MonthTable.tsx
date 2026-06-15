import React from 'react'
import { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../../hooks/useNamespace'

export interface MonthTableProps {
  date: Dayjs
  value?: Dayjs | Dayjs[] | null
  onPick?: (month: number) => void
  disabledDate?: (date: Date) => boolean
  cellClassName?: (date: Date) => string
  minDate?: Dayjs | null
  maxDate?: Dayjs | null
  rangeState?: {
    selecting: boolean
    endDate: Dayjs | null
  }
  onSelect?: (date: Dayjs) => void
}

const MonthTable: React.FC<MonthTableProps> = (props) => {
  const { date, value, onPick, disabledDate, cellClassName, minDate, maxDate, rangeState, onSelect } = props
  const ns = useNamespace('month-table')
  const nsCell = useNamespace('month-table-cell')

  // 定義月份縮寫
  const MONTHS = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ]

  // 將 12 個月份分成 3 行，每行 4 個
  const rows = []
  for (let i = 0; i < 3; i++) {
    rows.push(MONTHS.slice(i * 4, i * 4 + 4))
  }

  return (
    <table className={ns.b()} cellPadding="0" cellSpacing="0">
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((month, colIndex) => {
              const monthIndex = rowIndex * 4 + colIndex
              const cellDate = date.month(monthIndex).startOf('month')
              
              // 判斷該月份是否被選中
              let isSelected = false
              if (Array.isArray(value)) {
                isSelected = value.some(v => v && v.isSame(cellDate, 'month'))
              } else {
                isSelected = value?.isSame(cellDate, 'month') || false
              }

              let inRange = false
              let start = false
              let end = false

              if (minDate && maxDate) {
                start = cellDate.isSame(minDate, 'month')
                end = cellDate.isSame(maxDate, 'month')
                inRange = cellDate.isAfter(minDate, 'month') && cellDate.isBefore(maxDate, 'month')
              } else if (minDate && rangeState?.selecting && rangeState.endDate) {
                const rangeStart = minDate.isBefore(rangeState.endDate, 'month') ? minDate : rangeState.endDate
                const rangeEnd = minDate.isBefore(rangeState.endDate, 'month') ? rangeState.endDate : minDate
                start = cellDate.isSame(rangeStart, 'month')
                end = cellDate.isSame(rangeEnd, 'month')
                inRange = cellDate.isAfter(rangeStart, 'month') && cellDate.isBefore(rangeEnd, 'month')
              } else if (minDate) {
                start = cellDate.isSame(minDate, 'month')
              }

              const disabled = disabledDate?.(cellDate.toDate())
              const customClass = cellClassName?.(cellDate.toDate())

              return (
                <td
                  key={colIndex}
                  className={clsx(customClass, {
                    'current': isSelected || start || end,
                    'disabled': disabled,
                    'in-range': inRange,
                    'start-date': start,
                    'end-date': end
                  })}
                  onClick={() => !disabled && onPick?.(monthIndex)}
                  onMouseEnter={() => !disabled && onSelect?.(cellDate)}
                >
                  <div className={nsCell.b()}>
                    <span className={nsCell.e('text')}>
                      {month}
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

export default MonthTable
