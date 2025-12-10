import clsx from 'clsx'
import React from 'react'
import { isNumber } from '../../utils/types'
import styles from './ElBadge.module.scss'
import type { ElBadgeProps } from './types'

export const ElBadge: React.FC<ElBadgeProps> = ({
  value = '',
  max = 99,
  isDot = false,
  content,
  children,
  className,
  ...props
}) => {
  const show_content: string = (() => {
    if (isDot) return ''
    if (isNumber(value) && isNumber(max)) {
      return max < value ? `${max}+` : `${value}`
    }
    return `${value ?? ''}`
  })()

  return (
    <span {...props} className={clsx(styles['el-badge'], isDot ? styles['is-dot'] : '', className)}>
      {children}
      <sup className={clsx(styles['el-badge__content'])}>{content ? content : show_content}</sup>
    </span>
  )
}
export default ElBadge
