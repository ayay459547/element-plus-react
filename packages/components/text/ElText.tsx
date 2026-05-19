import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import './ElText.scss'
import type { ElTextProps } from './types'

const COMPONENT_NAME = 'ElText'

const ElText: React.FC<ElTextProps<any>> = forwardRef<HTMLElement, ElTextProps<any>>(
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
          `el-text--${type}`,
          `el-text--${size}`,
          truncated ? 'is-truncated' : '',
          lineClamp ? 'is-line-clamp' : '',
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
