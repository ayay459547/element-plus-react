import React, { forwardRef, useState, useMemo, useEffect } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import type { DatePickerPanelProps, ElDatePickerPanelInstance } from './types'
import DateTable from './components/DateTable'
import MonthTable from './components/MonthTable'
import YearTable from './components/YearTable'

import './ElDatePickerPanel.scss'

import DArrowLeft from '../../icons-svg/d-arrow-left.svg?react'
import ArrowLeft from '../../icons-svg/arrow-left.svg?react'
import DArrowRight from '../../icons-svg/d-arrow-right.svg?react'
import ArrowRight from '../../icons-svg/arrow-right.svg?react'

const COMPONENT_NAME = 'ElDatePickerPanel'

const ElDatePickerPanel = forwardRef<ElDatePickerPanelInstance, DatePickerPanelProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      type = 'date',
      disabledDate,
      className,
      style,
      onPick,
      shortcuts,
      border = true,
      showFooter = false,
      minDate: propsMinDate,
      maxDate: propsMaxDate,
      rangeState: propsRangeState,
      viewDate: propsViewDate,
      onPrevMonth,
      onNextMonth,
      onPrevYear,
      onNextYear,
      firstDayOfWeek
    } = props

    const ns = useNamespace('picker-panel')

    // 內部維護當前面板顯示的基準日期
    const [innerDate, setInnerDate] = useState<Dayjs>(() => {
      if (propsViewDate) return propsViewDate
      if (Array.isArray(value)) {
        return value[0] || dayjs()
      }
      return value || (Array.isArray(defaultValue) ? defaultValue[0] : defaultValue) || dayjs()
    })

    // 當外部 viewDate 變化時，同步內部狀態
    useEffect(() => {
      if (propsViewDate) {
        setInnerDate(propsViewDate)
      }
    }, [propsViewDate])

    // 當前選擇模式：日期、月份、年份
    const [selectionMode, setSelectionMode] = useState<'date' | 'month' | 'year' | 'week' | 'dates'>(() => {
      if (type === 'year') return 'year'
      if (type === 'month') return 'month'
      if (type === 'week') return 'week'
      if (type === 'dates') return 'dates'
      return 'date'
    })

    // 本地範圍選擇狀態（主要用於單面板測試或組件自理）
    const [localRangeState, setLocalRangeState] = useState({
      selecting: false,
      endDate: null as Dayjs | null
    })

    const minDate = propsMinDate
    const maxDate = propsMaxDate
    const rangeState = propsRangeState || localRangeState

    // 計算頭部年份標籤（如果是年份選擇模式，顯示十年區間）
    const yearLabel = useMemo(() => {
      if (selectionMode === 'year') {
        const startYear = Math.floor(innerDate.year() / 10) * 10
        return `${startYear} - ${startYear + 9}`
      }
      return `${innerDate.year()}`
    }, [innerDate, selectionMode])

    // 計算頭部月份標籤
    const monthLabel = useMemo(() => {
      // TODO: Use useLocale
      const MONTHS = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      return MONTHS[innerDate.month()]
    }, [innerDate])

    // 導航事件處理（如果傳入了 external handler 則使用之，否則修改內部的 innerDate）
    const handlePrevYear = () => {
      if (onPrevYear) {
        onPrevYear()
      } else {
        setInnerDate(innerDate.subtract(selectionMode === 'year' ? 10 : 1, 'year'))
      }
    }

    const handleNextYear = () => {
      if (onNextYear) {
        onNextYear()
      } else {
        setInnerDate(innerDate.add(selectionMode === 'year' ? 10 : 1, 'year'))
      }
    }

    const handlePrevMonth = () => {
      if (onPrevMonth) {
        onPrevMonth()
      } else {
        setInnerDate(innerDate.subtract(1, 'month'))
      }
    }

    const handleNextMonth = () => {
      if (onNextMonth) {
        onNextMonth()
      } else {
        setInnerDate(innerDate.add(1, 'month'))
      }
    }

    // 當在 YearTable 選中某年份時
    const handleYearPick = (year: number) => {
      const newDate = innerDate.year(year)
      setInnerDate(newDate)
      if (type === 'year') {
        onPick?.(newDate)
      } else {
        setSelectionMode('month')
      }
    }

    // 當在 MonthTable 選中某月份時
    const handleMonthPick = (month: number) => {
      const newDate = innerDate.month(month)
      setInnerDate(newDate)
      if (type === 'month') {
        onPick?.(newDate)
      } else {
        setSelectionMode('date')
      }
    }

    // 當在 DateTable 選中某日期時
    const handleDatePick = (date: Dayjs) => {
      if (type === 'daterange' || type === 'datetimerange') {
         // 範圍選擇通常由父組件協調，這裡僅透出單點選中事件
         onPick?.(date)
      } else if (type === 'dates') {
        const valueArray = Array.isArray(value) ? [...value] : []
        const index = valueArray.findIndex(v => v.isSame(date, 'day'))
        if (index > -1) {
          valueArray.splice(index, 1)
        } else {
          valueArray.push(date)
        }
        onPick?.(valueArray)
      } else if (type === 'week') {
        onPick?.(date.startOf('week'))
      } else {
        setInnerDate(date)
        onPick?.(date)
      }
    }

    // 鼠標懸停日期回調（用於範圍選擇的高亮渲染）
    const handleDateSelect = (date: Dayjs) => {
       if (props.onSelect) {
         props.onSelect(date)
       } else {
         setLocalRangeState(prev => ({ ...prev, endDate: date }))
       }
    }

    const handleTodayClick = () => {
      const now = dayjs()
      setInnerDate(now)
      onPick?.(now)
    }

    const handleClearClick = () => {
      onPick?.(null as any)
    }

    const showMonthHeader = selectionMode === 'date' || selectionMode === 'dates' || selectionMode === 'week'

    return (
      <div
        className={clsx(ns.b(), className, {
          [ns.is('border')]: border
        })}
        style={style}
      >
        <div className={ns.e('body-wrapper')}>
          {shortcuts && shortcuts.length > 0 && (
            <div className={ns.e('sidebar')}>
              {shortcuts.map((shortcut, index) => (
                <button
                  key={index}
                  type="button"
                  className={ns.e('shortcut')}
                  onClick={() => {
                    const date = typeof shortcut.value === 'function' ? shortcut.value() : shortcut.value
                    onPick?.(dayjs(date))
                  }}
                >
                  {shortcut.text}
                </button>
              ))}
            </div>
          )}
          <div className={ns.e('body')}>
            <div className={ns.e('header')}>
              <button
                type="button"
                className={clsx(ns.e('icon-btn'), 'd-arrow-left')}
                onClick={handlePrevYear}
              >
                <DArrowLeft />
              </button>
              {showMonthHeader && (
                <button
                  type="button"
                  className={clsx(ns.e('icon-btn'), 'arrow-left')}
                  onClick={handlePrevMonth}
                >
                  <ArrowLeft />
                </button>
              )}
              <span
                role="button"
                className={ns.e('header-label')}
                onClick={() => setSelectionMode('year')}
              >
                {yearLabel}
              </span>
              {showMonthHeader && (
                <span
                  role="button"
                  className={ns.e('header-label')}
                  onClick={() => setSelectionMode('month')}
                >
                  {monthLabel}
                </span>
              )}
              <button
                type="button"
                className={clsx(ns.e('icon-btn'), 'd-arrow-right')}
                onClick={handleNextYear}
              >
                <DArrowRight />
              </button>
              {showMonthHeader && (
                <button
                  type="button"
                  className={clsx(ns.e('icon-btn'), 'arrow-right')}
                  onClick={handleNextMonth}
                >
                  <ArrowRight />
                </button>
              )}
            </div>
            <div className={ns.e('content')}>
              {(selectionMode === 'date' || selectionMode === 'dates' || selectionMode === 'week') && (
                <DateTable
                  date={innerDate}
                  value={value}
                  onPick={handleDatePick}
                  onSelect={handleDateSelect}
                  disabledDate={disabledDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  rangeState={rangeState}
                  selectionMode={selectionMode}
                  firstDayOfWeek={firstDayOfWeek}
                />
              )}
              {selectionMode === 'month' && (
                <MonthTable
                  date={innerDate}
                  value={value}
                  onPick={handleMonthPick}
                  disabledDate={disabledDate}
                />
              )}
              {selectionMode === 'year' && (
                <YearTable
                  date={innerDate}
                  value={value}
                  onPick={handleYearPick}
                  disabledDate={disabledDate}
                />
              )}
            </div>
          </div>
        </div>
        {(showFooter || type === 'datetime' || type === 'datetimerange') && (
           <div className={ns.e('footer')}>
             <button
               type="button"
               className={clsx(ns.e('footer-btn'), 'is-text')}
               onClick={handleClearClick}
             >
               Clear
             </button>
             <button
               type="button"
               className={clsx(ns.e('footer-btn'), 'is-text')}
               onClick={handleTodayClick}
             >
               Today
             </button>
             <button
               type="button"
               className={clsx(ns.e('footer-btn'), 'is-primary')}
               onClick={() => onPick?.(innerDate)}
             >
               OK
             </button>
           </div>
        )}
      </div>
    )
  }
)

ElDatePickerPanel.displayName = COMPONENT_NAME

export default ElDatePickerPanel
