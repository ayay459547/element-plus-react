import React, { forwardRef, useState, useImperativeHandle, useMemo, useEffect } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import ElButton from '../button/ElButton'
import ElButtonGroup from '../button/ElButtonGroup'
import DateTable from './components/DateTable'
import type { CalendarProps, ElCalendarInstance, CalendarDateType } from './types'

import './ElCalendar.scss'

const COMPONENT_NAME = 'ElCalendar'

const ElCalendar = forwardRef<ElCalendarInstance, CalendarProps>((props, ref) => {
  const {
    value,
    range,
    firstDayOfWeek = 7,
    className,
    style,
    onChange,
    dateCellRender,
    headerRender
  } = props

  const ns = useNamespace('calendar')

  const [selectedDay, setSelectedDay] = useState<Dayjs | undefined>(() => {
    if (value) return dayjs(value)
    if (range) return dayjs(range[0])
    return undefined
  })

  const [curMonth, setCurMonth] = useState<Dayjs>(() => {
    if (selectedDay) return selectedDay.startOf('month')
    return dayjs().startOf('month')
  })

  useEffect(() => {
    if (value) {
      const d = dayjs(value)
      setSelectedDay(d)
      setCurMonth(d.startOf('month'))
    }
  }, [value])

  const i18nDate = useMemo(() => {
    // TODO: Use locale for month names
    return curMonth.format('YYYY MMMM')
  }, [curMonth])

  const realRange = useMemo(() => {
    if (!range) return null
    return [dayjs(range[0]), dayjs(range[1])] as [Dayjs, Dayjs]
  }, [range])

  const selectDate = (type: CalendarDateType) => {
    let newDate: Dayjs
    if (type === 'prev-month') {
      newDate = curMonth.subtract(1, 'month')
    } else if (type === 'next-month') {
      newDate = curMonth.add(1, 'month')
    } else if (type === 'prev-year') {
      newDate = curMonth.subtract(1, 'year')
    } else if (type === 'next-year') {
      newDate = curMonth.add(1, 'year')
    } else {
      newDate = dayjs()
    }

    if (newDate.isSame(curMonth, 'month') && type !== 'today') return
    
    // If range is set, validate it
    if (realRange) {
        if (newDate.isBefore(realRange[0], 'month') || newDate.isAfter(realRange[1], 'month')) {
            return
        }
    }

    setCurMonth(newDate.startOf('month'))
    if (type === 'today') {
        setSelectedDay(newDate)
        onChange?.(newDate)
    }
  }

  const handlePick = (date: Dayjs) => {
    if (realRange) {
        if (date.isBefore(realRange[0], 'day') || date.isAfter(realRange[1], 'day')) {
            return
        }
    }
    setSelectedDay(date)
    setCurMonth(date.startOf('month'))
    onChange?.(date)
  }

  useImperativeHandle(ref, () => ({
    selectDate,
    pickDay: handlePick,
    selectedDay: selectedDay || dayjs()
  }))

  return (
    <div className={clsx(ns.b(), className)} style={style}>
      <div className={ns.e('header')}>
        {headerRender ? (
          headerRender({
            date: i18nDate,
            selectDate
          })
        ) : (
          <>
            <div className={ns.e('title')}>{i18nDate}</div>
            {!range && (
              <div className={ns.e('button-group')}>
                <ElButtonGroup>
                  <ElButton size="small" onClick={() => selectDate('prev-month')}>
                    Previous Month
                  </ElButton>
                  <ElButton size="small" onClick={() => selectDate('today')}>
                    Today
                  </ElButton>
                  <ElButton size="small" onClick={() => selectDate('next-month')}>
                    Next Month
                  </ElButton>
                </ElButtonGroup>
              </div>
            )}
          </>
        )}
      </div>
      <div className={ns.e('body')}>
        <DateTable
          date={curMonth}
          selectedDay={selectedDay}
          onPick={handlePick}
          firstDayOfWeek={firstDayOfWeek}
          dateCellRender={dateCellRender}
          range={realRange || undefined}
        />
      </div>
    </div>
  )
})

ElCalendar.displayName = COMPONENT_NAME

export default ElCalendar
