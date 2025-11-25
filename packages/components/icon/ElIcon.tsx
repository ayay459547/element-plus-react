// import clsx from 'clsx'
import '@element-plus/components/base/style/css'
import type { CSSProperties } from 'react'
import React from 'react'

import type { IconProps } from './types'
export type { IconProps }

const addUnit = (value?: number | string): string | undefined => {
  if (value === null) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

const useNamespace = (block: string) => {
  const b = () => `el-${block}`
  return { b }
}

export const ElIcon: React.FC<IconProps> = ({
  size,
  color,
  style,
  className,
  children,
  ...attrs
}) => {
  const ns = useNamespace('icon')

  const fontSize = addUnit(size)

  const mergedStyle: CSSProperties = {
    ...(fontSize ? { fontSize } : {}),
    ...(color ? { ['--color' as any]: color } : {}),
    ...style
  }

  return (
    <i className={`${ns.b()} ${className ?? ''}`} style={mergedStyle} {...attrs}>
      {children}
    </i>
  )
}

export default ElIcon
