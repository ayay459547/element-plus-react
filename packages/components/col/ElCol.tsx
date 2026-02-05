import { useRow } from '@ayay459547/element-plus-react/components/row/useRow'
import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import { isNumber, isObject } from '@ayay459547/element-plus-react/utils/types'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import './ElCol.scss'
import type { ElColProps } from './types'

const COMPONENT_NAME = 'ElCol'

const ElCol: React.FC<ElColProps<any>> = forwardRef<HTMLElement, ElColProps<any>>(
  (
    {
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
    },
    ref
  ) => {
    const Tag = tag || 'div'

    const { gutter } = useRow()

    let gutterX: ReturnType<typeof addUnit> = ''
    const colStyles: CSSProperties = {}

    if (gutter) {
      gutterX = addUnit(gutter / 2)
      colStyles.paddingRight = `${gutterX}`
      colStyles.paddingLeft = `${gutterX}`
    }

    const classes: string[] = []
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
    sizes.forEach((size) => {
      if (isNumber(props[size])) {
        classes.push(`el-col-${size}-${props[size]}`)
      } else if (isObject(props[size])) {
        Object.entries(props[size]).forEach(([prop, sizeProp]) => {
          classes.push(
            prop !== 'span' ? `el-col-${size}-${prop}-${sizeProp}` : `el-col-${size}-${sizeProp}`
          )
        })
      }
    })

    return (
      <Tag
        {...props}
        ref={ref}
        className={clsx(
          'el-col',
          gutter ? 'is-guttered' : '',
          typeof span === 'number' ? `el-col-${span}` : '',
          typeof offset === 'number' ? `el-col-offset-${offset}` : '',
          typeof push === 'number' ? `el-col-push-${push}` : '',
          typeof pull === 'number' ? `el-col-pull-${pull}` : '',
          ...classes,
          className
        )}
        style={{ ...colStyles, ...style }}
      >
        {children}
      </Tag>
    )
  }
)

ElCol.displayName = COMPONENT_NAME

export default ElCol
