import { useRow } from '@ayay/element-plus-react/components/row/useRow'
import { isNumber, isObject } from '@ayay/element-plus-react/utils/types'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import styles from './ElCol.module.scss'
import type { ElColProps } from './types'

const ElCol = <T extends React.ElementType = 'div'>({
  span = 24,
  offset = 0,
  push = 0,
  pull = 0,
  // 為了方便跑迴圈 註解
  // xs,
  // sm,
  // md,
  // lg,
  // xl,
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

  const classes: string[] = []
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  sizes.forEach((size) => {
    if (isNumber(props[size])) {
      classes.push(styles[`el-col-${size}-${props[size]}`])
    } else if (isObject(props[size])) {
      Object.entries(props[size]).forEach(([prop, sizeProp]) => {
        classes.push(
          prop !== 'span'
            ? styles[`el-col-${size}-${prop}-${sizeProp}`]
            : styles[`el-col-${size}-${sizeProp}`]
        )
      })
    }
  })

  return (
    <Tag
      {...props}
      className={clsx(
        'el-col',
        styles['el-col'],
        gutter ? styles['is-guttered'] : '',
        typeof span === 'number' ? styles[`el-col-${span}`] : '',
        typeof offset === 'number' ? styles[`el-col-offset-${offset}`] : '',
        typeof push === 'number' ? styles[`el-col-push-${push}`] : '',
        typeof pull === 'number' ? styles[`el-col-pull-${pull}`] : '',
        ...classes,
        className
      )}
      style={{ ...colStyles, ...style }}
    >
      {children}
    </Tag>
  )
}

export default ElCol
