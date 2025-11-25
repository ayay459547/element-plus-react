import { forwardRef, useContext, useImperativeHandle, useState } from 'react'
import Thumb from './Thumb.tsx'
import { ScrollbarContext, ScrollbarContextType } from './constants' // useScrollbarContext
import { GAP } from './util'

export interface BarProps {
  always?: boolean
  minSize: number
}

export type BarInstance = {
  handleScroll: (wrap: HTMLDivElement) => void
  update: () => void
}

export const Bar = forwardRef<BarInstance, BarProps>((props, ref) => {
  const { always = true, minSize } = props
  const scrollbar = useContext(ScrollbarContext) as ScrollbarContextType | null

  const [moveX, setMoveX] = useState(0)
  const [moveY, setMoveY] = useState(0)
  const [sizeWidth, setSizeWidth] = useState('')
  const [sizeHeight, setSizeHeight] = useState('')
  const [ratioX, setRatioX] = useState(1)
  const [ratioY, setRatioY] = useState(1)

  const handleScroll = (wrap: HTMLDivElement) => {
    if (!wrap) return
    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP

    setMoveY(((wrap.scrollTop * 100) / offsetHeight) * ratioY)
    setMoveX(((wrap.scrollLeft * 100) / offsetWidth) * ratioX)
  }

  const update = () => {
    const wrap = scrollbar?.wrapElement
    if (!wrap) return

    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP

    const originalHeight = offsetHeight ** 2 / wrap.scrollHeight
    const originalWidth = offsetWidth ** 2 / wrap.scrollWidth

    const height = Math.max(originalHeight, minSize)
    const width = Math.max(originalWidth, minSize)

    setRatioY(originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height)))
    setRatioX(originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width)))

    setSizeHeight(height + GAP < offsetHeight ? `${height}px` : '')
    setSizeWidth(width + GAP < offsetWidth ? `${width}px` : '')
  }

  // 對應 Vue defineExpose
  useImperativeHandle(ref, () => ({
    handleScroll,
    update
  }))

  return (
    <>
      <Thumb move={moveX} ratio={ratioX} size={sizeWidth} always={always} />
      <Thumb move={moveY} ratio={ratioY} size={sizeHeight} always={always} vertical />
    </>
  )
})

export default Bar
