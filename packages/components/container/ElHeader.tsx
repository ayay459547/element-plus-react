import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import styles from './ElContainer.module.scss'
import type { ElHeaderProps } from './types'

const COMPONENT_NAME = 'ElHeader'

const ElHeader = forwardRef<HTMLDivElement, ElHeaderProps>(
  ({ height, children, className, style, ...props }, ref) => {
    const styleCSSVar: CSSProperties & Record<string, string> = {}
    if (typeof height === 'string') {
      styleCSSVar['--el-header-height'] = `${height}`
    }

    return (
      <div
        {...props}
        ref={ref}
        className={clsx('el-header', styles['el-header'], className)}
        style={{ ...styleCSSVar, ...style }}
      >
        {children}
      </div>
    )
  }
)

ElHeader.displayName = COMPONENT_NAME

export default ElHeader
