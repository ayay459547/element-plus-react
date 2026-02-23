import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import { useWindowSize } from '@reactuses/core'
import type { ElDrawerProps } from '../types'
import { useClamp } from './useClamp'

export const useResizable = (props: ElDrawerProps) => {
  const isHorizontal = props.direction && ['ltr', 'rtl'].includes(props.direction)

  const { width, height } = useWindowSize()

  const sign = isHorizontal ? 1 : -1

  const windowSize = isHorizontal ? width : height

  const startSize = 0

  const offset = 0

  const getSize = useClamp(startSize + sign * offset, 4, windowSize)

  const hasStartedDragging = false

  const isResizing = false

  return {
    size: hasStartedDragging ? `${getSize}px` : addUnit(props.size),
    isResizing,
    isHorizontal
  }
}
