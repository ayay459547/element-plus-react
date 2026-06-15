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

  const panelStyle = {
    ...style,
    flexBasis: size !== undefined ? (typeof size === 'number' ? `${size}px` : size) : undefined,
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
