import type { FC, MouseEvent as ReactMouseEvent } from 'react'
import { useEffect, useRef } from 'react'
import type { Color } from '../utils/color.ts'

interface HueSliderProps {
  color: Color
  vertical?: boolean
  onChange?: () => void
}

const HueSlider: FC<HueSliderProps> = ({ color, vertical = false, onChange }) => {
  const barRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  const update = () => {
    const hue = color.get('hue')
    if (thumbRef.current && barRef.current) {
      if (vertical) {
        const height = barRef.current.offsetHeight
        thumbRef.current.style.top = (hue * height) / 360 + 'px'
      } else {
        const width = barRef.current.offsetWidth
        thumbRef.current.style.left = (hue * width) / 360 + 'px'
      }
    }
  }

  useEffect(() => {
    update()
  }, [color.hue])

  const handleDrag = (event: MouseEvent | ReactMouseEvent) => {
    if (barRef.current) {
      const rect = barRef.current.getBoundingClientRect()
      let hue
      if (vertical) {
        let top = event.clientY - rect.top
        top = Math.max(0, top)
        top = Math.min(top, rect.height)
        hue = (top / rect.height) * 360
      } else {
        let left = event.clientX - rect.left
        left = Math.max(0, left)
        left = Math.min(left, rect.width)
        hue = (left / rect.width) * 360
      }
      color.set('hue', hue)
      onChange?.()
    }
  }

  const handleMouseDown = (event: ReactMouseEvent) => {
    handleDrag(event)
    const onMouseMove = (e: MouseEvent) => handleDrag(e)
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div
      className={`el-color-hue-slider ${vertical ? 'is-vertical' : ''}`}
      ref={barRef}
      onMouseDown={handleMouseDown}
    >
      <div className="el-color-hue-slider__bar"></div>
      <div className="el-color-hue-slider__thumb" ref={thumbRef}></div>
    </div>
  )
}

export default HueSlider
