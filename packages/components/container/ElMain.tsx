import clsx from 'clsx'
import { forwardRef } from 'react'
import './ElContainer.scss'
import type { ElMainProps } from './types'

const COMPONENT_NAME = 'ElMain'

const ElMain: React.FC<ElMainProps> = forwardRef<HTMLDivElement, ElMainProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={clsx('el-main', className)} style={style}>
        {children}
      </div>
    )
  }
)

ElMain.displayName = COMPONENT_NAME

export default ElMain
