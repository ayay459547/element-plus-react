import '@ayay459547/element-plus-react/components/base/style/css'
import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import './ElIcon.scss'
import type { ElIconProps } from './types'

const COMPONENT_NAME = 'ElIcon'

const ElIcon: React.FC<ElIconProps> = forwardRef<HTMLElement, ElIconProps>(
  ({ size, color, loading = false, children, style, className, ...props }, ref) => {
    const fontSize = addUnit(size)

    const mergedStyle: CSSProperties = {
      ...(fontSize ? { fontSize } : {}),
      ...(color ? { ['--color' as any]: color } : {}),
      ...style
    }

    return (
      <i
        {...props}
        ref={ref}
        className={clsx('el-icon', loading ? 'is-loading' : '', className)}
        style={mergedStyle}
      >
        {children}
      </i>
    )
  }
)

ElIcon.displayName = COMPONENT_NAME

export default ElIcon
