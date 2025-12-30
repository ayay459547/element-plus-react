import ElFooter from 'ayay-element-plus-react/components/container/ElFooter.tsx'
import ElHeader from 'ayay-element-plus-react/components/container/ElHeader.tsx'
import clsx from 'clsx'
import { Children, isValidElement } from 'react'
import styles from './ElContainer.module.scss'
import type { ElContainerProps } from './types'

const ElContainer: React.FC<ElContainerProps> = ({ direction, children, className, style }) => {
  const isVertical = (() => {
    if (direction === 'vertical') return true
    if (direction === 'horizontal') return false

    if (!children) return false

    return Children.toArray(children).some((child) => {
      if (!isValidElement(child)) return false

      const type = child.type as any
      return type === ElHeader || type === ElFooter
    })
  })()

  return (
    <div
      className={clsx(
        'el-container',
        styles['el-container'],
        isVertical ? styles['is-vertical'] : '',
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}

export default ElContainer
