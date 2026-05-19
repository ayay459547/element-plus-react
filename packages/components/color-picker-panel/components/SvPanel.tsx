import { useRef, useEffect, type FC, type MouseEvent as ReactMouseEvent } from 'react'
import type { Color } from '../utils/color.ts'

interface SvPanelProps {
  color: Color
  onChange?: () => void
}

const SvPanel: FC<SvPanelProps> = ({ color, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const update = () => {
    const saturation = color.get('saturation')
    const value = color.get('value')
    if (cursorRef.current && containerRef.current) {
      const { clientWidth: width, clientHeight: height } = containerRef.current
      cursorRef.current.style.left = (saturation * width) / 100 + 'px'
      cursorRef.current.style.top = ((100 - value) * height) / 100 + 'px'
    }
  }

  useEffect(() => {
    update()
  }, [color.hue, color.saturation, color.value])

  const handleDrag = (event: MouseEvent | ReactMouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      let left = event.clientX - rect.left
      let top = event.clientY - rect.top

      left = Math.max(0, left)
      left = Math.min(left, rect.width)
      top = Math.max(0, top)
      top = Math.min(top, rect.height)

      color.set({
        saturation: (left / rect.width) * 100,
        value: 100 - (top / rect.height) * 100
      })
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
      className="el-color-svpanel"
      ref={containerRef}
      style={{
        backgroundColor: `hsl(${color.get('hue')}, 100%, 50%)`
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="el-color-svpanel__white"></div>
      <div className="el-color-svpanel__black"></div>
      <div
        className="el-color-svpanel__cursor"
        ref={cursorRef}
      >
        <div></div>
      </div>
    </div>
  )
}

export default SvPanel
