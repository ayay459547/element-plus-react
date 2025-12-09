import clsx from 'clsx'
import React from 'react'
import { isNumber } from '../../utils/types'
import styles from './Badge.module.scss'
import type { BadgeProps } from './types'

export const Badge: React.FC<BadgeProps> = ({
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
export default Badge
