import React from 'react'
import { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../../hooks/useNamespace'

export interface YearTableProps {
  date: Dayjs
  value?: Dayjs | Dayjs[] | null
  onPick?: (year: number) => void
  disabledDate?: (date: Date) => boolean
}

const YearTable: React.FC<YearTableProps> = (props) => {
  const { date, value, onPick, disabledDate } = props
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
              const cellDate = date.year(year)
              
              // 判斷該年份是否被選中
              const isSelected = Array.isArray(value)
                ? value.some(v => v.year() === year)
                : value?.year() === year
              
              const disabled = disabledDate?.(cellDate.toDate())

              return (
                <td
                  key={colIndex}
                  className={clsx({
                    'current': isSelected,
                    'disabled': disabled
                  })}
                  onClick={() => !disabled && onPick?.(year)}
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
