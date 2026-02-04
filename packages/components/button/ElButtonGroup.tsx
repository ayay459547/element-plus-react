import clsx from 'clsx'
import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import styles from './ElButton.module.scss'
import type { ElButtonGroupProps, ElButtonProps } from './types'

function isElButton(element: any): element is React.ReactElement<ElButtonProps> {
  return element?.type !== undefined
}

const COMPONENT_NAME = 'ElButtonGroup'

const ElButtonGroup = forwardRef<HTMLDivElement, ElButtonGroupProps>(
  ({ size, type, direction = 'horizontal', children, style, className, ...props }, ref) => {
    const hasDirection = ['horizontal', 'vertical'].includes(direction)

    return (
      <div
        {...props}
        ref={ref}
        className={clsx(
          'el-button-group',
          styles['el-button-group'],
          hasDirection ? styles[`el-button-group--${direction}`] : '',
          className
        )}
        style={style}
      >
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child

          if (!isElButton(child)) return child

          return cloneElement(child, {
            // 不覆蓋 children 已經傳入的 props
            type: child.props.type ?? type,
            size: child.props.size ?? size
          })
        })}
      </div>
    )
  }
)

ElButtonGroup.displayName = COMPONENT_NAME

export default ElButtonGroup
