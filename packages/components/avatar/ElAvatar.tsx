import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import clsx from 'clsx'
import type { CSSProperties, DOMAttributes } from 'react'
import { forwardRef, useState } from 'react'
import './ElAvatar.scss'
import type { ElAvatarProps } from './types'

const COMPONENT_NAME = 'ElAvatar'

const ElAvatar: React.FC<ElAvatarProps> = forwardRef<HTMLDivElement, ElAvatarProps>(
  (
    {
      icon,
      size = 'default',
      shape = 'circle',
      src,
      srcSet,
      alt,
      fit,
      children,
      className,
      style,
      onLoad,
      onError,
      ...props
    },
    ref
  ) => {
    const isLarge = size === 'large'
    const isSmall = size === 'small'

    const sizeStyle: CSSProperties & { '--el-avatar-size'?: ReturnType<typeof addUnit> } = {}
    if (typeof size === 'number') {
      sizeStyle['--el-avatar-size'] = addUnit(size)
    }

    const [hasLoadError, setHasLoadError] = useState(false)

    const handleLoad: DOMAttributes<HTMLImageElement>['onLoad'] = (e) => {
      setHasLoadError(false)
      onLoad?.(e)
    }

    const handleError: DOMAttributes<HTMLImageElement>['onError'] = (e) => {
      setHasLoadError(true)
      onError?.(e)
    }

    const fitStyle: CSSProperties = {}
    if (fit) {
      fitStyle.objectFit = fit
    }

    let showSlot = children
    if ((src || srcSet) && !hasLoadError) {
      showSlot = (
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          style={fitStyle}
          onLoad={handleLoad}
          onError={handleError}
        />
      )
    } else if (icon) {
      showSlot = <ElIcon>{icon}</ElIcon>
    }

    return (
      <div
        {...props}
        ref={ref}
        className={clsx(
          'el-avatar',
          isLarge ? 'el-avatar--large' : '',
          isSmall ? 'el-avatar--small' : '',
          `el-avatar--${shape}`,
          className
        )}
        style={{ ...style, ...sizeStyle }}
      >
        {showSlot}
      </div>
    )
  }
)

ElAvatar.displayName = COMPONENT_NAME

export default ElAvatar
