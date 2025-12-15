import clsx from 'clsx'
import { Children, cloneElement, isValidElement } from 'react'
import styles from './ElButton.module.scss'
import type { ElButtonGroupProps, ElButtonProps } from './types'

function isElButton(element: any): element is React.ReactElement<ElButtonProps> {
  return element?.type !== undefined
}

const ElButtonGroup: React.FC<ElButtonGroupProps> = ({
  size,
  type,
  direction = 'horizontal',
  children,
  style,
  className
}) => {
  const isHorizontal = direction === 'horizontal'
  const isVertical = direction === 'vertical'

  return (
    <div
      className={clsx(
        'el-button-group',
        styles['el-button-group'],
        isHorizontal ? styles['el-button-group--horizontal'] : '',
        isVertical ? styles['el-button-group--vertical'] : '',
        className
      )}
      style={{ ...style }}
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

export default ElButtonGroup
