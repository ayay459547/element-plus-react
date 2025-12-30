import 'ayay-element-plus-react/components/base/style/css'
import { addUnit } from 'ayay-element-plus-react/utils/dom/style'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import React from 'react'
import styles from './ElIcon.module.scss'

import type { ElIconProps } from './types'

export const ElIcon: React.FC<ElIconProps> = ({
  size,
  color,
  loading = false,
  children,
  style,
  className,
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
      className={clsx('el-icon', styles['el-icon'], loading ? styles['is-loading'] : '', className)}
      style={mergedStyle}
    >
      {children}
    </i>
  )
}

export default ElIcon
