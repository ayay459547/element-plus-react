import type { FC, MouseEvent as ReactMouseEvent } from 'react'
import { useEffect, useRef } from 'react'
import type { Color } from '../utils/color.ts'

interface AlphaSliderProps {
  color: Color
  vertical?: boolean
  onChange?: () => void
}

const AlphaSlider: FC<AlphaSliderProps> = ({ color, vertical = false, onChange }) => {
  const barRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  const update = () => {
    const alpha = color.get('alpha')
    if (thumbRef.current && barRef.current) {
      if (vertical) {
        const height = barRef.current.offsetHeight
        thumbRef.current.style.top = (alpha * height) / 100 + 'px'
      } else {
        const width = barRef.current.offsetWidth
        thumbRef.current.style.left = (alpha * width) / 100 + 'px'
      }
    }
  }

  useEffect(() => {
    update()
  }, [color.alpha])

  const getBackground = () => {
    const { r, g, b } = color.toRgb()
    return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`
  }

  const handleDrag = (event: MouseEvent | ReactMouseEvent) => {
    if (barRef.current) {
      const rect = barRef.current.getBoundingClientRect()
      let alpha
      if (vertical) {
        let top = event.clientY - rect.top
        top = Math.max(0, top)
        top = Math.min(top, rect.height)
        alpha = Math.round((top / rect.height) * 100)
      } else {
        let left = event.clientX - rect.left
        left = Math.max(0, left)
        left = Math.min(left, rect.width)
        alpha = Math.round((left / rect.width) * 100)
      }
      color.set('alpha', alpha)
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
      className={`el-color-alpha-slider ${vertical ? 'is-vertical' : ''}`}
      ref={barRef}
      onMouseDown={handleMouseDown}
    >
      <div className="el-color-alpha-slider__bar" style={{ background: getBackground() }}></div>
      <div className="el-color-alpha-slider__thumb" ref={thumbRef}></div>
    </div>
  )
}

export default AlphaSlider
