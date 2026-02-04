import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import { isNumber } from '../../utils/types'
import styles from './ElBadge.module.scss'
import type { ElBadgeProps } from './types'

const COMPONENT_NAME = 'ElBadge'

const ElBadge = forwardRef<HTMLSpanElement, ElBadgeProps>(
  (
    {
      value = '',
      max = 99,
      isDot = false,
      hidden = false,
      type = 'danger',
      showZero = true,
      color,
      offset,
      badgeStyle,
      badgeClass,
      content,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const show_content: string = (() => {
      if (isDot) return ''
      if (isNumber(value) && isNumber(max)) {
        return max < value ? `${max}+` : `${value}`
      }
      return `${value ?? ''}`
    })()

    const bindStyle: CSSProperties = {
      ...(badgeStyle ?? {})
    }
    if (color) {
      bindStyle.backgroundColor = `${color}`
    }
    if (Array.isArray(offset) && typeof offset[0] === 'number' && typeof offset[1] === 'number') {
      bindStyle.marginRight = addUnit(-offset[0])
      bindStyle.marginTop = addUnit(offset[1])
    }

    return (
      <span
        {...props}
        ref={ref}
        className={clsx('el-badge', styles['el-badge'], isDot ? styles['is-dot'] : '', className)}
        style={style}
      >
        {children}
        {!hidden && (
          <sup
            className={clsx(
              'el-badge__content',
              styles['el-badge__content'],
              styles['is-fixed'],
              isDot ? styles['is-dot'] : '',
              styles[`el-badge__content--${type}`],
              !showZero && `${value}` === `${0}` ? styles['is-hide-zero'] : '',
              badgeClass
            )}
            style={{ ...bindStyle }}
          >
            {content ? content : show_content}
          </sup>
        )}
      </span>
    )
  }
)

ElBadge.displayName = COMPONENT_NAME

export default ElBadge
