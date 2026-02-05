import ElFooter from '@ayay459547/element-plus-react/components/container/ElFooter.tsx'
import ElHeader from '@ayay459547/element-plus-react/components/container/ElHeader.tsx'
import clsx from 'clsx'
import { Children, forwardRef, isValidElement } from 'react'
import styles from './ElContainer.module.scss'
import type { ElContainerProps } from './types'

const COMPONENT_NAME = 'ElContainer'

const ElContainer: React.FC<ElContainerProps> = forwardRef<HTMLDivElement, ElContainerProps>(
  ({ direction, children, className, style, ...props }, ref) => {
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
        {...props}
        ref={ref}
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
)

ElContainer.displayName = COMPONENT_NAME

export default ElContainer
