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
      onNextYear
    } = props

    const ns = useNamespace('picker-panel')

    const [innerDate, setInnerDate] = useState<Dayjs>(() => {
      if (propsViewDate) return propsViewDate
      if (Array.isArray(value)) {
        return value[0] || dayjs()
      }
      return value || (Array.isArray(defaultValue) ? defaultValue[0] : defaultValue) || dayjs()
    })

    useEffect(() => {
      if (propsViewDate) {
        setInnerDate(propsViewDate)
      }
    }, [propsViewDate])

    const [selectionMode, setSelectionMode] = useState<'date' | 'month' | 'year'>(() => {
      if (type === 'year') return 'year'
      if (type === 'month') return 'month'
      return 'date'
    })

    // Local range state if not provided via props (for single panel range selection experiments)
    const [localRangeState, setLocalRangeState] = useState({
      selecting: false,
      endDate: null as Dayjs | null
    })

    const minDate = propsMinDate
    const maxDate = propsMaxDate
    const rangeState = propsRangeState || localRangeState

    const yearLabel = useMemo(() => {
      if (selectionMode === 'year') {
        const startYear = Math.floor(innerDate.year() / 10) * 10
        return `${startYear} - ${startYear + 9}`
      }
      return `${innerDate.year()}`
    }, [innerDate, selectionMode])

    const monthLabel = useMemo(() => {
      const MONTHS = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      return MONTHS[innerDate.month()]
    }, [innerDate])

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

    const handleYearPick = (year: number) => {
      const newDate = innerDate.year(year)
      setInnerDate(newDate)
      if (type === 'year') {
        onPick?.(newDate)
      } else {
        setSelectionMode('month')
      }
    }

    const handleMonthPick = (month: number) => {
      const newDate = innerDate.month(month)
      setInnerDate(newDate)
      if (type === 'month') {
        onPick?.(newDate)
      } else {
        setSelectionMode('date')
      }
    }

    const handleDatePick = (date: Dayjs) => {
      if (type === 'daterange' || type === 'datetimerange') {
         // Range selection logic usually handled by parent DateRangePanel, 
         // but we emit onPick for the individual panel's pick event.
         onPick?.(date)
      } else {
        setInnerDate(date)
        onPick?.(date)
      }
    }

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
              {(onPrevYear || !propsViewDate) && (
                <button
                  type="button"
                  className={clsx(ns.e('icon-btn'), 'd-arrow-left')}
                  onClick={handlePrevYear}
                >
                  <DArrowLeft />
                </button>
              )}
              {selectionMode === 'date' && (onPrevMonth || !propsViewDate) && (
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
              {selectionMode === 'date' && (
                <span
                  role="button"
                  className={ns.e('header-label')}
                  onClick={() => setSelectionMode('month')}
                >
                  {monthLabel}
                </span>
              )}
              {(onNextYear || !propsViewDate) && (
                <button
                  type="button"
                  className={clsx(ns.e('icon-btn'), 'd-arrow-right')}
                  onClick={handleNextYear}
                >
                  <DArrowRight />
                </button>
              )}
              {selectionMode === 'date' && (onNextMonth || !propsViewDate) && (
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
              {selectionMode === 'date' && (
                <DateTable
                  date={innerDate}
                  value={value}
                  onPick={handleDatePick}
                  onSelect={handleDateSelect}
                  disabledDate={disabledDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  rangeState={rangeState}
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
