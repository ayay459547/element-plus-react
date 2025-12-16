import type { ElColProps } from '@ayay/element-plus-react/components/col/types'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { Children, cloneElement, isValidElement } from 'react'
import styles from './ElRow.module.scss'
import type { ElRowProps } from './types'
import { RowContext } from './useRow'

function isElCol(element: any): element is React.ReactElement<ElColProps> {
  return element?.type !== undefined
}

const ElRow = <T extends React.ElementType = 'div'>({
  gutter = 0,
  justify = 'start',
  align,
  tag,
  children,
  className,
  style,
  ...props
}: ElRowProps<T>) => {
  const Tag = tag || 'div'

  let gutterX = ''
  const rowStyles: CSSProperties = {}

  if (gutter) {
    gutterX = `${gutter / 2}px`
    rowStyles.marginRight = `-${gutterX}`
    rowStyles.marginLeft = `-${gutterX}`
  }

  return (
    <RowContext.Provider value={{ gutter }}>
      <Tag
        {...props}
        className={clsx(
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

export default ElRow
