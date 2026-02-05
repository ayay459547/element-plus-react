import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import styles from './ElText.module.scss'
import type { ElTextProps } from './types'

const COMPONENT_NAME = 'ElText'

const ElText: React.FC<ElTextProps> = forwardRef<HTMLElement, ElTextProps<any>>(
  (
    {
      type,
      size = 'default',
      truncated = false,
      lineClamp,
      tag,
      children,
      className,
      style = {},
      ...rest
    },
    ref
  ) => {
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
        ref={ref}
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
)

ElText.displayName = COMPONENT_NAME

ElText.displayName = COMPONENT_NAME

export default ElText
