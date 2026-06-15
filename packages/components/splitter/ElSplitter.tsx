import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import type { SplitterProps, ElSplitterInstance } from './types'
import './ElSplitter.scss'

const COMPONENT_NAME = 'ElSplitter'

const ElSplitter = forwardRef<ElSplitterInstance, SplitterProps>((props, ref) => {
  const {
    direction = 'horizontal',
    lazy = false,
    className,
    style,
    children
  } = props

  const ns = useNamespace('splitter')
  const splitterRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null)
  
  const isHorizontal = direction === 'horizontal'

  // 存儲各面板的動態大小
  const [panelSizes, setPanelSizes] = useState<Record<number, number | string>>({})

  // 開始拖拽
  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setActiveBarIndex(index)
  }

  // 處理拖拽過程中的大小計算
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || activeBarIndex === null || !splitterRef.current) return

    const rect = splitterRef.current.getBoundingClientRect()
    // 根據鼠標相對於容器的位置計算偏移量
    const offset = isHorizontal ? e.clientX - rect.left : e.clientY - rect.top
    const totalSize = isHorizontal ? rect.width : rect.height
    
    // 目前僅實現兩個面板的基礎縮放逻辑
    if (activeBarIndex === 0) {
      const percentage = (offset / totalSize) * 100
      // 確保百分比在 0-100 之間（實際應用中還需結合 min/max）
      const boundedPercentage = Math.max(0, Math.min(100, percentage))
      
      setPanelSizes(prev => ({
        ...prev,
        0: `${boundedPercentage}%`,
        1: `${100 - boundedPercentage}%`
      }))
    }
  }, [isDragging, activeBarIndex, isHorizontal])

  // 結束拖拽
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setActiveBarIndex(null)
  }, [])

  // 綁定全局鼠標事件以支持平滑拖拽
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const validChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  )

  const renderedChildren: React.ReactNode[] = []
  validChildren.forEach((child, index) => {
    if (React.isValidElement(child)) {
      // 優先使用拖拽產生的動態大小，否則使用 props 傳入的 size
      const size = panelSizes[index] || (child.props as any).size
      renderedChildren.push(
        React.cloneElement(child as React.ReactElement, {
          key: `panel-${index}`,
          size: size
        })
      )
    }
    
    // 在面板之間插入分割條
    if (index < validChildren.length - 1) {
      renderedChildren.push(
        <div
          key={`bar-${index}`}
          className={clsx('el-splitter-bar', {
            'is-active': activeBarIndex === index
          })}
          onMouseDown={handleMouseDown(index)}
        >
          <div className={clsx('el-splitter-bar__dragger', 
            isHorizontal ? 'el-splitter-bar__dragger-horizontal' : 'el-splitter-bar__dragger-vertical',
            { 'is-active': activeBarIndex === index }
          )} />
        </div>
      )
    }
  })

  return (
    <div
      ref={splitterRef}
      className={clsx(ns.b(), ns.e(direction), className)}
      style={style}
    >
      {renderedChildren}
      {isDragging && (
        <div className={clsx(ns.e('mask'), ns.e(`mask-${direction}`))} />
      )}
    </div>
  )
})

ElSplitter.displayName = COMPONENT_NAME

export default ElSplitter
