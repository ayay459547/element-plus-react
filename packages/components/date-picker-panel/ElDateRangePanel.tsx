import React, { forwardRef, useState, useMemo, useEffect } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import type { DatePickerPanelProps, ElDatePickerPanelInstance } from './types'
import ElDatePickerPanel from './ElDatePickerPanel'

import './ElDatePickerPanel.scss'

const COMPONENT_NAME = 'ElDateRangePanel'

const ElDateRangePanel = forwardRef<ElDatePickerPanelInstance, DatePickerPanelProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      type = 'daterange',
      disabledDate,
      className,
      style,
      onPick,
      shortcuts,
      unlinkPanels = false
    } = props

    const ns = useNamespace('picker-panel')

    const [leftDate, setLeftDate] = useState<Dayjs>(() => {
      if (Array.isArray(value) && value[0]) return value[0]
      return (Array.isArray(defaultValue) ? defaultValue[0] : defaultValue) || dayjs()
    })

    const [rightDate, setRightDate] = useState<Dayjs>(() => {
      if (Array.isArray(value) && value[1]) return value[1]
      const d = (Array.isArray(defaultValue) ? defaultValue[1] : defaultValue) || dayjs()
      return d.add(1, 'month')
    })

    const [rangeState, setRangeState] = useState({
      selecting: false,
      endDate: null as Dayjs | null
    })

    useEffect(() => {
      if (Array.isArray(value)) {
        if (value[0]) {
           setLeftDate(value[0])
           if (!value[1] || value[1].isSame(value[0], 'month')) {
              setRightDate(value[0].add(1, 'month'))
           } else {
              setRightDate(value[1])
           }
        }
      }
    }, [value])

    const handleLeftPrevMonth = () => {
      setLeftDate(leftDate.subtract(1, 'month'))
      if (!unlinkPanels) {
        setRightDate(rightDate.subtract(1, 'month'))
      }
    }

    const handleLeftPrevYear = () => {
      setLeftDate(leftDate.subtract(1, 'year'))
      if (!unlinkPanels) {
        setRightDate(rightDate.subtract(1, 'year'))
      }
    }

    const handleRightNextMonth = () => {
      setRightDate(rightDate.add(1, 'month'))
      if (!unlinkPanels) {
        setLeftDate(leftDate.add(1, 'month'))
      }
    }

    const handleRightNextYear = () => {
      setRightDate(rightDate.add(1, 'year'))
      if (!unlinkPanels) {
        setLeftDate(leftDate.add(1, 'year'))
      }
    }

    const minDate = Array.isArray(value) ? value[0] : null
    const maxDate = Array.isArray(value) ? value[1] : null

    const handleRangePick = (date: Dayjs) => {
      if (!rangeState.selecting) {
        setRangeState({
          selecting: true,
          endDate: null
        })
        onPick?.([date, null as any], true)
      } else {
        setRangeState({
          selecting: false,
          endDate: null
        })
        if (minDate && date.isBefore(minDate)) {
          onPick?.([date, minDate])
        } else {
          onPick?.([minDate!, date])
        }
      }
    }

    const handleSelect = (date: Dayjs) => {
      if (rangeState.selecting) {
        setRangeState(prev => ({ ...prev, endDate: date }))
      }
    }

    return (
      <div
        className={clsx(ns.b(), ns.m('range'), className)}
        style={style}
      >
        <div className={ns.e('body-wrapper')}>
          {shortcuts && shortcuts.length > 0 && (
             <div className={ns.e('sidebar')}>
               {/* Shortcuts logic here */}
             </div>
          )}
          <div className={ns.e('body')}>
            <div className={ns.e('content')} style={{ display: 'flex' }}>
              <ElDatePickerPanel
                {...props}
                border={false}
                value={value}
                viewDate={leftDate}
                type="date"
                onPick={handleRangePick}
                onSelect={handleSelect}
                onPrevMonth={handleLeftPrevMonth}
                onPrevYear={handleLeftPrevYear}
                minDate={minDate}
                maxDate={maxDate}
                rangeState={rangeState}
                className={ns.e('left-panel')}
              />
              <ElDatePickerPanel
                {...props}
                border={false}
                value={value}
                viewDate={rightDate}
                type="date"
                onPick={handleRangePick}
                onSelect={handleSelect}
                onNextMonth={handleRightNextMonth}
                onNextYear={handleRightNextYear}
                minDate={minDate}
                maxDate={maxDate}
                rangeState={rangeState}
                className={ns.e('right-panel')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
)

ElDateRangePanel.displayName = COMPONENT_NAME

export default ElDateRangePanel
