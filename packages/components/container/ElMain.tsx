import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './ElContainer.module.scss'
import type { ElMainProps } from './types'

const COMPONENT_NAME = 'ElMain'

const ElMain: React.FC<ElMainProps> = forwardRef<HTMLDivElement, ElMainProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={clsx('el-main', styles['el-main'], className)}
        style={style}
      >
        {children}
      </div>
    )
  }
)

ElMain.displayName = COMPONENT_NAME

export default ElMain
