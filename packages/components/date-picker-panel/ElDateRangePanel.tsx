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

    const isMonthRange = type === 'monthrange'
    const isYearRange = type === 'yearrange'

    // 左側面板顯示的基準日期
    const [leftDate, setLeftDate] = useState<Dayjs>(() => {
      if (Array.isArray(value) && value[0]) return value[0]
      return (Array.isArray(defaultValue) ? defaultValue[0] : defaultValue) || dayjs()
    })

    // 右側面板顯示的基準日期
    const [rightDate, setRightDate] = useState<Dayjs>(() => {
      if (Array.isArray(value) && value[1]) return value[1]
      const d = (Array.isArray(defaultValue) ? defaultValue[1] : defaultValue) || dayjs()
      if (isMonthRange) return d.add(1, 'year')
      if (isYearRange) return d.add(10, 'year')
      return d.add(1, 'month')
    })

    // 範圍選擇的中間狀態
    const [rangeState, setRangeState] = useState({
      selecting: false,
      endDate: null as Dayjs | null
    })

    // 當外部 value 變化時，同步左右面板顯示
    useEffect(() => {
      if (Array.isArray(value)) {
        if (value[0]) {
           setLeftDate(value[0])
           if (!value[1]) {
              if (isMonthRange) setRightDate(value[0].add(1, 'year'))
              else if (isYearRange) setRightDate(value[0].add(10, 'year'))
              else setRightDate(value[0].add(1, 'month'))
           } else {
              setRightDate(value[1])
           }
        }
      }
    }, [value, isMonthRange, isYearRange])

    const handleLeftPrevMonth = () => {
      setLeftDate(leftDate.subtract(1, 'month'))
      if (!unlinkPanels) setRightDate(rightDate.subtract(1, 'month'))
    }

    const handleLeftPrevYear = () => {
      const step = isYearRange ? 10 : 1
      setLeftDate(leftDate.subtract(step, 'year'))
      if (!unlinkPanels) setRightDate(rightDate.subtract(step, 'year'))
    }

    const handleRightNextMonth = () => {
      setRightDate(rightDate.add(1, 'month'))
      if (!unlinkPanels) setLeftDate(leftDate.add(1, 'month'))
    }

    const handleRightNextYear = () => {
      const step = isYearRange ? 10 : 1
      setRightDate(rightDate.add(step, 'year'))
      if (!unlinkPanels) setLeftDate(leftDate.add(step, 'year'))
    }

    const minDate = Array.isArray(value) ? value[0] : null
    const maxDate = Array.isArray(value) ? value[1] : null

    const handleRangePick = (date: Dayjs) => {
      const unit = isMonthRange ? 'month' : isYearRange ? 'year' : 'day'
      if (!rangeState.selecting) {
        setRangeState({ selecting: true, endDate: null })
        onPick?.([date, null as any], true)
      } else {
        setRangeState({ selecting: false, endDate: null })
        if (minDate && date.isBefore(minDate, unit)) {
          onPick?.([date, minDate])
        } else {
          onPick?.([minDate!, date])
        }
      }
    }

    // 處理鼠標懸停日期（更新 rangeState）
    const handleSelect = (date: Dayjs) => {
      if (rangeState.selecting) {
        setRangeState(prev => ({ ...prev, endDate: date }))
      }
    }

    const panelType = isMonthRange ? 'month' : isYearRange ? 'year' : 'date'

    return (
      <div
        className={clsx(ns.b(), ns.m('range'), className)}
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
                    if (Array.isArray(date)) {
                      onPick?.([dayjs(date[0]), dayjs(date[1])])
                    }
                  }}
                >
                  {shortcut.text}
                </button>
              ))}
            </div>
          )}
          <div className={ns.e('body')}>
            <div className={ns.e('content')} style={{ display: 'flex' }}>
              <ElDatePickerPanel
                {...props}
                border={false}
                value={value}
                viewDate={leftDate}
                type={panelType}
                onPick={handleRangePick}
                onSelect={handleSelect}
                onPrevMonth={handleLeftPrevMonth}
                onPrevYear={handleLeftPrevYear}
                minDate={minDate}
                maxDate={maxDate}
                rangeState={rangeState}
                className={ns.e('left-panel')}
                cellClassName={props.cellClassName}
              />
              <ElDatePickerPanel
                {...props}
                border={false}
                value={value}
                viewDate={rightDate}
                type={panelType}
                onPick={handleRangePick}
                onSelect={handleSelect}
                onNextMonth={handleRightNextMonth}
                onNextYear={handleRightNextYear}
                minDate={minDate}
                maxDate={maxDate}
                rangeState={rangeState}
                className={ns.e('right-panel')}
                cellClassName={props.cellClassName}
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
