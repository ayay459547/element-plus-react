import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
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

  // 計算面板樣式，支持動態傳入的 size (像素或百分比)
  const panelStyle = {
    ...style,
    // flexBasis 控制面板在 flex 佈局中的基準尺寸
    flexBasis: size !== undefined ? (typeof size === 'number' ? `${size}px` : size) : undefined,
    // 設置最小寬高/最大寬高以實現縮放限制
    minWidth: typeof min === 'number' ? `${min}px` : min,
    maxWidth: typeof max === 'number' ? `${max}px` : max,
    minHeight: typeof min === 'number' ? `${min}px` : min,
    maxHeight: typeof max === 'number' ? `${max}px` : max,
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
