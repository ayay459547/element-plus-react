import React, { forwardRef, useState, useRef, useEffect, useCallback, useMemo, useImperativeHandle } from 'react'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import { SplitterContext } from './useSplitterContext'
import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import CaretLeft from '@ayay459547/element-plus-react/icons-svg/caret-left.svg?react'
import CaretRight from '@ayay459547/element-plus-react/icons-svg/caret-right.svg?react'
import CaretTop from '@ayay459547/element-plus-react/icons-svg/caret-top.svg?react'
import CaretBottom from '@ayay459547/element-plus-react/icons-svg/caret-bottom.svg?react'
import type { SplitterProps, ElSplitterInstance, SplitterPanelProps } from './types'
import './ElSplitter.scss'

const COMPONENT_NAME = 'ElSplitter'

const ElSplitter = forwardRef<ElSplitterInstance, SplitterProps>((props, ref) => {
  const {
    direction = 'horizontal',
    lazy = false,
    className,
    style,
    children,
    onResizeStart,
    onResize,
    onResizeEnd
  } = props

  const ns = useNamespace('splitter')
  const nsBar = useNamespace('splitter-bar')
  const splitterRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null)
  
  const isHorizontal = direction === 'horizontal'

  const validChildren = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child) => React.isValidElement(child)
    ) as React.ReactElement<SplitterPanelProps>[]
  }, [children])

  // 存儲各面板的動態大小 (支持像素或百分比)
  const [panelSizes, setPanelSizes] = useState<(string | number)[]>([])
  // 拖拽過程中的臨時大小 (用於非 lazy 模式或內部計算)
  const [tempSizes, setTempSizes] = useState<(string | number)[]>([])

  // 初始化大小
  useEffect(() => {
    const initialSizes = validChildren.map(child => child.props.size ?? '')
    // 如果都沒有指定大小，則平均分配
    const hasSpecifiedSize = initialSizes.some(s => s !== '')
    if (!hasSpecifiedSize && initialSizes.length > 0) {
      const avg = `${100 / initialSizes.length}%`
      setPanelSizes(initialSizes.map(() => avg))
    } else {
      setPanelSizes(initialSizes)
    }
  }, [validChildren.length]) // 僅在子元素數量變化時重新初始化，或者在初始掛載時

  // 用於拖拽計算的初始數據
  const dragStartData = useRef<{
    initialSizes: number[]
    totalSize: number
    startPos: number
  } | null>(null)

  useImperativeHandle(ref, () => ({
    getSizes: () => panelSizes,
    setSizes: (sizes: (string | number)[]) => setPanelSizes(sizes)
  }))

  // 開始拖拽
  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    if (!splitterRef.current) return
    if ((e.target as HTMLElement).closest('.' + nsBar.e('collapse-icon'))) return // 避免點擊折疊圖標觸發拖拽
    
    e.preventDefault()

    const rect = splitterRef.current.getBoundingClientRect()
    const panels = Array.from(splitterRef.current.children).filter(el => 
      el.classList.contains(ns.namespace + '-splitter-panel')
    ) as HTMLElement[]

    const initialSizes = panels.map(p => isHorizontal ? p.offsetWidth : p.offsetHeight)
    const totalSize = isHorizontal ? rect.width : rect.height
    const startPos = isHorizontal ? e.clientX : e.clientY

    dragStartData.current = {
      initialSizes,
      totalSize,
      startPos
    }

    setIsDragging(true)
    setActiveBarIndex(index)
    setTempSizes(panelSizes)
    onResizeStart?.()
  }

  // 處理拖拽過程中的大小計算
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || activeBarIndex === null || !dragStartData.current || !splitterRef.current) return

    const { initialSizes, totalSize, startPos } = dragStartData.current
    const currentPos = isHorizontal ? e.clientX : e.clientY
    const delta = currentPos - startPos

    const newSizes = [...initialSizes]
    
    // 獲取相鄰兩個面板的限制
    const leftPanel = validChildren[activeBarIndex].props
    const rightPanel = validChildren[activeBarIndex + 1].props
    
    const parseSize = (size: string | number | undefined, total: number) => {
      if (typeof size === 'number') return size
      if (typeof size === 'string') {
        if (size.endsWith('%')) return (parseFloat(size) / 100) * total
        if (size.endsWith('px')) return parseFloat(size)
        return parseFloat(size) || 0
      }
      return 0
    }

    const minLeft = leftPanel.min !== undefined ? parseSize(leftPanel.min, totalSize) : 0
    const maxLeft = leftPanel.max !== undefined ? parseSize(leftPanel.max, totalSize) : totalSize
    
    const minRight = rightPanel.min !== undefined ? parseSize(rightPanel.min, totalSize) : 0
    const maxRight = rightPanel.max !== undefined ? parseSize(rightPanel.max, totalSize) : totalSize

    // 計算新的大小，並應用限制
    let newLeftSize = initialSizes[activeBarIndex] + delta
    let newRightSize = initialSizes[activeBarIndex + 1] - delta

    // 應用限制 (簡化邏輯：兩者互補)
    if (newLeftSize < minLeft) {
      newLeftSize = minLeft
      newRightSize = initialSizes[activeBarIndex] + initialSizes[activeBarIndex + 1] - minLeft
    } else if (newLeftSize > maxLeft) {
      newLeftSize = maxLeft
      newRightSize = initialSizes[activeBarIndex] + initialSizes[activeBarIndex + 1] - maxLeft
    }

    if (newRightSize < minRight) {
      newRightSize = minRight
      newLeftSize = initialSizes[activeBarIndex] + initialSizes[activeBarIndex + 1] - minRight
    } else if (newRightSize > maxRight) {
      newRightSize = maxRight
      newLeftSize = initialSizes[activeBarIndex] + initialSizes[activeBarIndex + 1] - maxRight
    }

    newSizes[activeBarIndex] = newLeftSize
    newSizes[activeBarIndex + 1] = newRightSize

    // 轉換為百分比以保持響應式
    const percentageSizes = newSizes.map(s => `${(s / totalSize) * 100}%`)
    
    if (!lazy) {
      setPanelSizes(percentageSizes)
      onResize?.(percentageSizes)
    } else {
      setTempSizes(percentageSizes)
    }
    
  }, [isDragging, activeBarIndex, isHorizontal, onResize, lazy, validChildren])

  // 結束拖拽
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      if (lazy && activeBarIndex !== null) {
        setPanelSizes(tempSizes)
        onResizeEnd?.(tempSizes)
      } else {
        onResizeEnd?.(panelSizes)
      }
      setIsDragging(false)
      setActiveBarIndex(null)
      dragStartData.current = null
    }
  }, [isDragging, lazy, tempSizes, panelSizes, onResizeEnd, activeBarIndex])

  // 綁定全局鼠標事件
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

  const renderedChildren: React.ReactNode[] = []
  validChildren.forEach((child, index) => {
    // 優先使用動態大小
    const size = panelSizes[index] !== undefined ? panelSizes[index] : child.props.size
    
    renderedChildren.push(
      React.cloneElement(child, {
        key: `panel-${index}`,
        size: size
      })
    )
    
    // 在面板之間插入分割條
    if (index < validChildren.length - 1) {
      const leftPanelProps = child.props
      const rightPanelProps = validChildren[index + 1].props
      const isResizable = leftPanelProps.resizable !== false && rightPanelProps.resizable !== false
      
      const handleCollapse = (targetIndex: number) => {
        setPanelSizes(prev => {
          const next = [...prev]
          const currentSize = prev[targetIndex]
          const isCollapsed = parseFloat(currentSize.toString()) === 0
          
          if (!isCollapsed) {
            // 折疊
            next[targetIndex] = 0
            const total = parseFloat(prev[index].toString()) + parseFloat(prev[index+1].toString())
            next[index === targetIndex ? index + 1 : index] = `${total}%`
          } else {
            // 展開：簡單恢復為 50/50 比例
            const total = parseFloat(prev[index].toString()) + parseFloat(prev[index+1].toString())
            next[index] = `${total / 2}%`
            next[index+1] = `${total / 2}%`
          }
          return next
        })
      }

      renderedChildren.push(
        <div
          key={`bar-${index}`}
          className={clsx(nsBar.b(), 
            nsBar.is('active', activeBarIndex === index),
            nsBar.is('disabled', !isResizable)
          )}
          onMouseDown={isResizable ? handleMouseDown(index) : undefined}
        >
          <div className={clsx(nsBar.e('dragger'), 
            isHorizontal ? nsBar.e('dragger-horizontal') : nsBar.e('dragger-vertical'),
            nsBar.is('active', activeBarIndex === index),
            nsBar.is('lazy', lazy)
          )} />
          
          {leftPanelProps.collapsible && (
            <div 
              className={clsx(nsBar.e('collapse-icon'), isHorizontal ? nsBar.e('horizontal-collapse-icon-start') : nsBar.e('vertical-collapse-icon-start'))}
              onClick={(e) => { e.stopPropagation(); handleCollapse(index); }}
            >
              <ElIcon>{isHorizontal ? <CaretLeft /> : <CaretTop />}</ElIcon>
            </div>
          )}
          {rightPanelProps.collapsible && (
            <div 
              className={clsx(nsBar.e('collapse-icon'), isHorizontal ? nsBar.e('horizontal-collapse-icon-end') : nsBar.e('vertical-collapse-icon-end'))}
              onClick={(e) => { e.stopPropagation(); handleCollapse(index + 1); }}
            >
              <ElIcon>{isHorizontal ? <CaretRight /> : <CaretBottom />}</ElIcon>
            </div>
          )}
        </div>
      )
    }
  })

  return (
    <SplitterContext.Provider value={{ direction, isDragging, activeBarIndex }}>
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
    </SplitterContext.Provider>
  )
})

ElSplitter.displayName = COMPONENT_NAME

export default ElSplitter
