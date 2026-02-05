import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import './ElContainer.scss'
import type { ElHeaderProps } from './types'

const COMPONENT_NAME = 'ElHeader'

const ElHeader: React.FC<ElHeaderProps> = forwardRef<HTMLDivElement, ElHeaderProps>(
  ({ height, children, className, style, ...props }, ref) => {
    const styleCSSVar: CSSProperties & Record<string, string> = {}
    if (typeof height === 'string') {
      styleCSSVar['--el-header-height'] = `${height}`
    }

    return (
      <div
        {...props}
        ref={ref}
        className={clsx('el-header', className)}
        style={{ ...styleCSSVar, ...style }}
      >
        {children}
      </div>
    )
  }
)

ElHeader.displayName = COMPONENT_NAME

export default ElHeader
