import React from 'react'
import { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../../hooks/useNamespace'

export interface YearTableProps {
  date: Dayjs
  value?: Dayjs | Dayjs[] | null
  onPick?: (year: number) => void
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

const YearTable: React.FC<YearTableProps> = (props) => {
  const { date, value, onPick, disabledDate, cellClassName, minDate, maxDate, rangeState, onSelect } = props
  const ns = useNamespace('year-table')
  const nsCell = useNamespace('year-table-cell')

  // 計算當前年份所在十年的起始年份
  const startYear = Math.floor(date.year() / 10) * 10
  
  const rows = []
  // 生成 10 個年份，展示 3 行
  for (let i = 0; i < 3; i++) {
    const row = []
    for (let j = 0; j < 4; j++) {
      if (i * 4 + j < 10) {
        row.push(startYear + i * 4 + j)
      }
    }
    if (row.length > 0) {
      rows.push(row)
    }
  }

  return (
    <table className={ns.b()} cellPadding="0" cellSpacing="0">
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((year, colIndex) => {
              const cellDate = date.year(year).startOf('year')
              
              // 判斷該年份是否被選中
              let isSelected = false
              if (Array.isArray(value)) {
                isSelected = value.some(v => v && v.isSame(cellDate, 'year'))
              } else {
                isSelected = value?.isSame(cellDate, 'year') || false
              }
              
              let inRange = false
              let start = false
              let end = false

              if (minDate && maxDate) {
                start = cellDate.isSame(minDate, 'year')
                end = cellDate.isSame(maxDate, 'year')
                inRange = cellDate.isAfter(minDate, 'year') && cellDate.isBefore(maxDate, 'year')
              } else if (minDate && rangeState?.selecting && rangeState.endDate) {
                const rangeStart = minDate.isBefore(rangeState.endDate, 'year') ? minDate : rangeState.endDate
                const rangeEnd = minDate.isBefore(rangeState.endDate, 'year') ? rangeState.endDate : minDate
                start = cellDate.isSame(rangeStart, 'year')
                end = cellDate.isSame(rangeEnd, 'year')
                inRange = cellDate.isAfter(rangeStart, 'year') && cellDate.isBefore(rangeEnd, 'year')
              } else if (minDate) {
                start = cellDate.isSame(minDate, 'year')
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
                  onClick={() => !disabled && onPick?.(year)}
                  onMouseEnter={() => !disabled && onSelect?.(cellDate)}
                >
                  <div className={nsCell.b()}>
                    <span className={nsCell.e('text')}>
                      {year}
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

export default YearTable
