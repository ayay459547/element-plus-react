import React, { useMemo } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../../hooks/useNamespace'
import { WEEK_DAYS } from '../../../constants/date'
import type { CalendarProps } from '../types'

export interface CalendarDateTableProps extends Pick<CalendarProps, 'dateCellRender'> {
  selectedDay?: Dayjs
  date: Dayjs
  hideHeader?: boolean
  firstDayOfWeek?: number
  onPick?: (date: Dayjs) => void
  range?: [Dayjs, Dayjs]
}

const DateTable: React.FC<CalendarDateTableProps> = (props) => {
  const { selectedDay, date, firstDayOfWeek = 7, onPick, dateCellRender, range } = props
  const nsTable = useNamespace('calendar-table')
  const nsDay = useNamespace('calendar-day')

  const offsetDay = (firstDayOfWeek % 7) || 0
  
  const startDate = useMemo(() => {
    if (range) return range[0].startOf('week').add(offsetDay, 'day')
    return date.startOf('month').startOf('week').add(offsetDay, 'day')
  }, [date, range, offsetDay])

  const rows = useMemo(() => {
    const list = []
    let count = 0
    
    // If range is provided, calculate number of weeks needed
    const weeks = range 
      ? Math.ceil(range[1].diff(startDate, 'day') / 7) + 1
      : 6

    for (let i = 0; i < weeks; i++) {
      const row = []
      for (let j = 0; j < 7; j++) {
        const cellDate = startDate.add(count, 'day')
        const isToday = cellDate.isSame(dayjs(), 'day')
        const isSelected = selectedDay ? cellDate.isSame(selectedDay, 'day') : false
        
        let type: 'prev' | 'current' | 'next' = 'current'
        if (range) {
             if (cellDate.isBefore(range[0], 'day')) type = 'prev'
             else if (cellDate.isAfter(range[1], 'day')) type = 'next'
             else type = 'current'
        } else {
            if (cellDate.isBefore(date.startOf('month'), 'day')) {
                type = 'prev'
            } else if (cellDate.isAfter(date.endOf('month'), 'day')) {
                type = 'next'
            }
        }

        row.push({
          date: cellDate,
          type,
          isToday,
          isSelected
        })
        count++
      }
      list.push(row)
    }
    return list
  }, [startDate, date, selectedDay, range])

  const WEEKS = useMemo(() => {
    const days = [...WEEK_DAYS]
    for (let i = 0; i < offsetDay; i++) {
      days.push(days.shift()!)
    }
    return days
  }, [offsetDay])

  return (
    <table
      className={clsx(nsTable.b(), {
        [nsTable.is('range')]: !!range
      })}
      cellPadding="0"
      cellSpacing="0"
    >
      <thead>
        <tr>
          {WEEKS.map((week) => (
            <th key={week}>{week}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={clsx({
                  [cell.type]: true,
                  [nsTable.is('today')]: cell.isToday,
                  [nsTable.is('selected')]: cell.isSelected
                })}
                onClick={() => onPick?.(cell.date)}
              >
                <div className={nsDay.b()}>
                  {dateCellRender ? (
                    dateCellRender({
                      date: cell.date,
                      type: `${cell.type}-month` as any,
                      isSelected: cell.isSelected,
                      day: cell.date.format('YYYY-MM-DD')
                    })
                  ) : (
                    <span>{cell.date.date()}</span>
                  )}
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
