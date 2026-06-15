import { forwardRef, useContext, useImperativeHandle, useState } from 'react'
import Thumb from './Thumb.tsx'
import { ScrollbarContext, type ScrollbarContextType } from './constants'
import { GAP } from './util'
import type { BarProps, BarInstance } from './types'

/**
 * Bar 組件
 * 負責協調水平和垂直滾動條 Thumb 的狀態更新
 */
export const Bar = forwardRef<BarInstance, BarProps>((props, ref) => {
  const { always = true, minSize } = props
  const scrollbar = useContext(ScrollbarContext) as ScrollbarContextType | null

  // X軸與Y軸的移動距離百分比
  const [moveX, setMoveX] = useState(0)
  const [moveY, setMoveY] = useState(0)
  
  // 滾動條 Thumb 的大小
  const [sizeWidth, setSizeWidth] = useState('')
  const [sizeHeight, setSizeHeight] = useState('')
  
  // 內容區與可視區的比例
  const [ratioX, setRatioX] = useState(1)
  const [ratioY, setRatioY] = useState(1)

  /**
   * 根據外層容器的滾動事件更新 Thumb 的移動位置
   */
  const handleScroll = (wrap: HTMLDivElement) => {
    if (!wrap) return
    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP

    // 計算百分比： (當前滾動值 / 可見區域) * 比例
    setMoveY(((wrap.scrollTop * 100) / offsetHeight) * ratioY)
    setMoveX(((wrap.scrollLeft * 100) / offsetWidth) * ratioX)
  }

  /**
   * 重新計算 Thumb 的大小和比例（當內容或容器大小改變時）
   */
  const update = () => {
    const wrap = scrollbar?.wrapElement
    if (!wrap) return

    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP

    // 根據內容高度和可見高度計算原始 Thumb 的理想尺寸
    const originalHeight = offsetHeight ** 2 / wrap.scrollHeight
    const originalWidth = offsetWidth ** 2 / wrap.scrollWidth

    // 確保尺寸不小於最小值
    const height = Math.max(originalHeight, minSize)
    const width = Math.max(originalWidth, minSize)

    // 計算比例，用於修正因限制 minSize 導致的滾動誤差
    setRatioY(originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height)))
    setRatioX(originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width)))

    // 只有當內容超過可見區域時，才顯示滾動條
    setSizeHeight(height + GAP < offsetHeight ? `${height}px` : '')
    setSizeWidth(width + GAP < offsetWidth ? `${width}px` : '')
  }

  useImperativeHandle(ref, () => ({
    handleScroll,
    update
  }))

  return (
    <>
      <Thumb move={moveX} ratio={ratioX} size={sizeWidth} always={always} scrollbar={scrollbar} />
      <Thumb
        move={moveY}
        ratio={ratioY}
        size={sizeHeight}
        always={always}
        vertical
        scrollbar={scrollbar}
      />
    </>
  )
})

export default Bar
