import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import './ElContainer.scss'
import type { ElFooterProps } from './types'

const COMPONENT_NAME = 'ElFooter'

const ElFooter: React.FC<ElFooterProps> = forwardRef<HTMLDivElement, ElFooterProps>(
  ({ height, children, className, style, ...props }, ref) => {
    const styleCSSVar: CSSProperties & Record<string, string> = {}
    if (typeof height === 'string') {
      styleCSSVar['--el-footer-height'] = `${height}`
    }

    return (
      <div
        {...props}
        ref={ref}
        className={clsx('el-footer', className)}
        style={{ ...styleCSSVar, ...style }}
      >
        {children}
      </div>
    )
  }
)

ElFooter.displayName = COMPONENT_NAME

export default ElFooter
