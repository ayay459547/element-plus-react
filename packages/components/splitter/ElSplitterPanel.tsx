import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import { useSplitterContext } from './useSplitterContext'
import type { SplitterPanelProps, ElSplitterPanelInstance } from './types'

const COMPONENT_NAME = 'ElSplitterPanel'

const ElSplitterPanel = forwardRef<ElSplitterPanelInstance, SplitterPanelProps>((props, ref) => {
  const {
    size,
    min,
    max,
    resizable = true,
    collapsible = false,
    className,
    style,
    children
  } = props

  const ns = useNamespace('splitter-panel')
  const { direction } = useSplitterContext()
  const isHorizontal = direction === 'horizontal'

  // 計算面板樣式，支持動態傳入的 size (像素或百分比)
  const panelStyle: React.CSSProperties = {
    ...style,
    flexBasis: size !== undefined ? (typeof size === 'number' ? `${size}px` : size) : undefined,
    flexGrow: size === undefined ? 1 : 0,
    flexShrink: size === undefined ? 1 : 0
  }

  if (isHorizontal) {
    panelStyle.minWidth = typeof min === 'number' ? `${min}px` : min
    panelStyle.maxWidth = typeof max === 'number' ? `${max}px` : max
  } else {
    panelStyle.minHeight = typeof min === 'number' ? `${min}px` : min
    panelStyle.maxHeight = typeof max === 'number' ? `${max}px` : max
  }

  return (
    <div
      ref={ref as any}
      className={clsx(ns.b(), className)}
      style={panelStyle}
    >
      {children}
    </div>
  )
})

ElSplitterPanel.displayName = COMPONENT_NAME

export default ElSplitterPanel
