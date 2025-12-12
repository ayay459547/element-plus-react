import '@ayay/element-plus-react/components/base/style/css'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import React from 'react'
import styles from './ElIcon.module.scss'

import type { ElIconProps } from './types'

const addUnit = (value?: number | string): string | undefined => {
  if (value === null) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

export const ElIcon: React.FC<ElIconProps> = ({
  size,
  color,
  loading = false,
  style,
  className,
  children,
  ...props
}) => {
  const fontSize = addUnit(size)

  const mergedStyle: CSSProperties = {
    ...(fontSize ? { fontSize } : {}),
    ...(color ? { ['--color' as any]: color } : {}),
    ...style
  }

  return (
    <i
      {...props}
      className={clsx(styles['el-icon'], loading ? styles['is-loading'] : '', className)}
      style={mergedStyle}
    >
      {children}
    </i>
  )
}

export default ElIcon
