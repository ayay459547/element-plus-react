import React from 'react'
import { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../../hooks/useNamespace'

export interface MonthTableProps {
  date: Dayjs
  value?: Dayjs | Dayjs[] | null
  onPick?: (month: number) => void
  disabledDate?: (date: Date) => boolean
}

const MonthTable: React.FC<MonthTableProps> = (props) => {
  const { date, value, onPick, disabledDate } = props
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
              const cellDate = date.month(monthIndex)
              
              // 判斷該月份是否被選中
              const isSelected = Array.isArray(value)
                ? value.some(v => v.year() === date.year() && v.month() === monthIndex)
                : value?.year() === date.year() && value?.month() === monthIndex
              
              const disabled = disabledDate?.(cellDate.toDate())

              return (
                <td
                  key={colIndex}
                  className={clsx({
                    'current': isSelected,
                    'disabled': disabled
                  })}
                  onClick={() => !disabled && onPick?.(monthIndex)}
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
