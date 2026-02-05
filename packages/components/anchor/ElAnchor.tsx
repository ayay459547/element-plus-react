import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './ElAnchor.module.scss'
import type { ElAnchorProps } from './types'

const COMPONENT_NAME = 'ElAnchor'

const ElAnchor: React.FC<ElAnchorProps> = forwardRef<HTMLDivElement, ElAnchorProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={clsx('el-anchor', styles['el-anchor'], className)}
        style={style}
      >
        {children}
      </div>
    )
  }
)

ElAnchor.displayName = COMPONENT_NAME

export default ElAnchor
