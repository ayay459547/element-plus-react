import React, { forwardRef, useState, useRef, useEffect, useCallback, useMemo } from 'react'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import type { WatermarkProps, ElWatermarkInstance } from './types'

const COMPONENT_NAME = 'ElWatermark'

const toContextPx = (value: number) => {
  const pixelRatio = window.devicePixelRatio || 1
  return value * pixelRatio
}

const getPixelRatio = () => window.devicePixelRatio || 1

const ElWatermark = forwardRef<ElWatermarkInstance, WatermarkProps>((props, ref) => {
  const {
    width,
    height,
    rotate = -22,
    zIndex = 9,
    image,
    content,
    font = {},
    gap = [100, 100],
    offset = [gap[0] / 2, gap[1] / 2],
    className,
    style,
    children
  } = props

  const ns = useNamespace('watermark')
  const containerRef = useRef<HTMLDivElement>(null)
  const watermarkRef = useRef<HTMLDivElement>(null)
  const [base64, setBase64] = useState('')

  const {
    color = 'rgba(0,0,0,0.15)',
    fontSize = 16,
    fontWeight = 'normal',
    fontFamily = 'sans-serif',
    fontStyle = 'normal'
  } = font

  /**
   * 繪製水印到 Canvas 並生成 Base64 圖片
   * 支持文字多行渲染與圖片渲染
   */
  const renderWatermark = useCallback(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return ''

    const ratio = getPixelRatio()
    const [gapX, gapY] = gap
    const [offsetX, offsetY] = offset
    
    // 估算內容的寬高（如果用戶未顯示指定）
    let markWidth = width || 120
    let markHeight = height || 64

    if (!image && content) {
      ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`
      const contents = Array.isArray(content) ? content : [content]
      const widths = contents.map(item => ctx.measureText(item).width)
      markWidth = width || Math.max(...widths)
      markHeight = height || (Number(fontSize) * contents.length + (contents.length - 1) * 4)
    }

    // 考慮設備像素比設置畫布大小
    const canvasWidth = (gapX + markWidth) * ratio
    const canvasHeight = (gapY + markHeight) * ratio
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    ctx.scale(ratio, ratio)
    
    // 設置旋轉中心為畫布內容中心，並應用旋轉
    ctx.translate(offsetX + markWidth / 2, offsetY + markHeight / 2)
    ctx.rotate((rotate * Math.PI) / 180)
    ctx.translate(-(offsetX + markWidth / 2), -(offsetY + markHeight / 2))

    if (image) {
      // 圖片水印
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.referrerPolicy = 'no-referrer'
      img.src = image
      img.onload = () => {
        ctx.drawImage(img, offsetX, offsetY, markWidth, markHeight)
        setBase64(canvas.toDataURL())
      }
    } else if (content) {
      // 文字水印，支持多行
      ctx.fillStyle = color
      ctx.textBaseline = 'top'
      ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`
      const contents = Array.isArray(content) ? content : [content]
      contents.forEach((item, index) => {
        ctx.fillText(item, offsetX, offsetY + index * (Number(fontSize) + 4))
      })
      setBase64(canvas.toDataURL())
    }

    return canvas.toDataURL()
  }, [width, height, rotate, image, content, color, fontSize, fontWeight, fontFamily, fontStyle, gap, offset])

  useEffect(() => {
    renderWatermark()
  }, [renderWatermark])

  /**
   * 使用 MutationObserver 進行安全防護
   * 監視水印元素是否被刪除、隱藏或樣式篡改（如 opacity: 0）
   */
  useEffect(() => {
    if (!watermarkRef.current || !containerRef.current) return

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        // 1. 水印節點被直接從 DOM 移除
        const isRemoved = Array.from(mutation.removedNodes).includes(watermarkRef.current!)
        // 2. 水印節點的屬性（如 style）被修改
        const isStyleChanged = mutation.type === 'attributes' && mutation.target === watermarkRef.current
        
        if (isRemoved || isStyleChanged) {
          // 重新繪製水印以恢復顯示
          renderWatermark()
        }
      }
    })

    // 監視容器及其子樹的變化
    observer.observe(containerRef.current, {
      attributes: true,
      subtree: true,
      childList: true
    })

    return () => observer.disconnect()
  }, [renderWatermark])

  const watermarkStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // 確保不攔截點擊事件
    backgroundRepeat: 'repeat',
    backgroundImage: `url(${base64})`,
    zIndex: zIndex,
    ...style
  }

  return (
    <div
      ref={containerRef}
      className={clsx(ns.b(), className)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* 渲染子元素內容 */}
      {children}
      {/* 水印疊加層 */}
      <div ref={watermarkRef} style={watermarkStyle} />
    </div>
  )
})

ElWatermark.displayName = COMPONENT_NAME

export default ElWatermark
