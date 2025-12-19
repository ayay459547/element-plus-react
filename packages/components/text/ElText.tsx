import clsx from 'clsx'
import type { CSSProperties, ElementType } from 'react'
import styles from './ElText.module.scss'
import type { ElTextProps } from './types'

const ElText = <T extends ElementType = 'span'>({
  type,
  size = 'default',
  truncated = false,
  lineClamp,
  tag,
  children,
  className,
  style = {},
  ...rest
}: ElTextProps<T>) => {
  const Tag = tag || 'span'

  const mergedStyle: CSSProperties = {
    ...(lineClamp
      ? {
          lineClamp: lineClamp,
          WebkitLineClamp: lineClamp
        }
      : {}),
    ...style
  }

  return (
    <Tag
      {...rest}
      className={clsx(
        'el-text',
        styles['el-text'],
        styles[`el-text--${type}`],
        styles[`el-text--${size}`],
        truncated ? styles['is-truncated'] : '',
        lineClamp ? styles['is-line-clamp'] : '',
        className
      )}
      style={mergedStyle}
    >
      {children}
    </Tag>
  )
}

export default ElText
