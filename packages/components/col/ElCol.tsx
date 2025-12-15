import { useRow } from '@ayay/element-plus-react/components/row/useRow'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import styles from './ElCol.module.scss'
import type { ElColProps } from './types'

const ElCol = <T extends React.ElementType = 'div'>({
  span = 24,
  offset = 0,
  push = 0,
  pull = 0,
  xs,
  sm,
  md,
  lg,
  xl,
  tag,
  children,
  className,
  style,
  ...props
}: ElColProps<T>) => {
  const Tag = tag || 'div'

  const { gutter } = useRow()

  let gutterX = ''
  const colStyles: CSSProperties = {}

  if (gutter) {
    gutterX = `${gutter / 2}px`

    colStyles.paddingRight = `${gutterX}`
    colStyles.paddingLeft = `${gutterX}`
  }

  return (
    <Tag
      {...props}
      className={clsx(
        styles['el-col'],
        styles[`el-col-${span}`],
        styles[`el-col-offset-${offset}`],
        className
      )}
      style={{ ...colStyles, ...style }}
    >
      {children}
    </Tag>
  )
}

export default ElCol
