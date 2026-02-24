import clsx from 'clsx'
import { forwardRef } from 'react'
import './ElOverlay.scss'
import type { ElOverlayProps } from './types'

const COMPONENT_NAME = 'ElOverlay'

const ElOverlay: React.FC<ElOverlayProps> = forwardRef<HTMLDivElement, ElOverlayProps>(
  (props, ref) => {
    const { zIndex, children, className, style, onClick } = props
    return (
      <div
        ref={ref}
        className={clsx('el-overlay', className)}
        style={{ ...style, zIndex: zIndex }}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
)

ElOverlay.displayName = COMPONENT_NAME

export default ElOverlay
