import React, { CSSProperties, useMemo } from 'react'
import clsx from 'clsx'
import { useNamespace } from '../../hooks/useNamespace'
import type { SpaceProps, SpaceSize } from './types'

import './ElSpace.scss'

const COMPONENT_NAME = 'ElSpace'

const SPACE_SIZE_MAP: Record<string, number> = {
  small: 8,
  default: 12,
  large: 16
}

function getNumberSize(size: SpaceSize): number {
  if (typeof size === 'number') {
    return size
  }
  return SPACE_SIZE_MAP[size] || 0
}

const ElSpace: React.FC<SpaceProps> = (props) => {
  const {
    className,
    style,
    direction = 'horizontal',
    size = 'small',
    alignment,
    spacer,
    wrap = false,
    fill = false,
    fillRatio = 100,
    children
  } = props

  const ns = useNamespace('space')

  const containerStyle = useMemo(() => {
    const computedStyle: CSSProperties = {
      ...style,
      flexWrap: wrap ? 'wrap' : 'nowrap'
    }

    if (alignment) {
      computedStyle.alignItems = alignment
    }

    if (Array.isArray(size)) {
      const [rowGap, colGap] = size
      computedStyle.rowGap = getNumberSize(rowGap)
      computedStyle.columnGap = getNumberSize(colGap)
    } else {
      const gap = getNumberSize(size)
      computedStyle.gap = gap
    }

    return computedStyle
  }, [style, wrap, alignment, size])

  const itemStyle = useMemo(() => {
    const computedStyle: CSSProperties = {}
    if (fill) {
      computedStyle.flexGrow = 1
      computedStyle.minWidth = `${fillRatio}%`
    }
    return computedStyle
  }, [fill, fillRatio])

  // Extract all valid children
  const childArray = React.Children.toArray(children).filter(
    (child) => child !== null && child !== undefined
  )

  if (childArray.length === 0) {
    return null
  }

  return (
    <div
      className={clsx(
        ns.b(),
        ns.m(direction),
        className
      )}
      style={containerStyle}
    >
      {childArray.map((child, index) => {
        const isLast = index === childArray.length - 1

        return (
          <React.Fragment key={`space-item-${index}`}>
            <div className={ns.e('item')} style={itemStyle}>
              {child}
            </div>
            {!isLast && spacer && (
              <span className={ns.e('item')} style={itemStyle}>
                {spacer}
              </span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

ElSpace.displayName = COMPONENT_NAME

export default ElSpace
