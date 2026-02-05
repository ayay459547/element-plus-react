import type { ElColProps } from '@ayay459547/element-plus-react/components/col/types'
import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { Children, cloneElement, forwardRef, isValidElement } from 'react'
import styles from './ElRow.module.scss'
import type { ElRowProps } from './types'
import { RowContext } from './useRow'

function isElCol(element: any): element is React.ReactElement<ElColProps> {
  return element?.type !== undefined
}

const COMPONENT_NAME = 'ElRow'

const ElRow: React.FC<ElRowProps> = forwardRef<HTMLElement, ElRowProps<any>>(
  ({ gutter = 0, justify = 'start', align, tag, children, className, style, ...props }, ref) => {
    const Tag = tag || 'div'

    let gutterX: ReturnType<typeof addUnit> = ''
    const rowStyles: CSSProperties = {}

    if (gutter) {
      gutterX = addUnit(gutter / 2)
      rowStyles.marginRight = `-${gutterX}`
      rowStyles.marginLeft = `-${gutterX}`
    }

    return (
      <RowContext.Provider value={{ gutter }}>
        <Tag
          {...props}
          ref={ref}
          className={clsx(
            'el-row',
            styles['el-row'],
            align ? styles[`is-align-${align}`] : '',
            justify !== 'start' ? styles[`is-justify-${justify}`] : '',
            className
          )}
          style={{
            ...rowStyles,
            ...style
          }}
        >
          {Children.map(children, (child) => {
            if (!isValidElement(child)) return child

            if (!isElCol(child)) return child

            return cloneElement(child, {
              // 不覆蓋 children 已經傳入的 props
              ...child.props
            })
          })}
        </Tag>
      </RowContext.Provider>
    )
  }
)

ElRow.displayName = COMPONENT_NAME

ElRow.displayName = COMPONENT_NAME

export default ElRow
