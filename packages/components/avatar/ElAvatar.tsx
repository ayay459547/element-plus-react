import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import styles from './ElAvatar.module.scss'
import type { ElAvatarProps } from './types'

const ElAvatar: React.FC<ElAvatarProps> = ({
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
  onError,
  ...props
}) => {
  const isLarge = size === 'large'
  const isSmall = size === 'small'
  const sizeStyle =
    typeof size === 'number'
      ? {
          '--el-avatar-size': `${size}px`
        }
      : {}

  const [hasLoadError, setHasLoadError] = useState(false)

  const handleError = (e: Event) => {
    setHasLoadError(true)
    onError?.(e)
  }

  const fitStyle: CSSProperties = {}
  if (fit) {
    fitStyle.objectFit = fit
  }

  let showSlot = children
  if (src || (srcSet && !hasLoadError)) {
    showSlot = <img src={src} alt={alt} src-set={srcSet} style={fitStyle} on-error={handleError} />
  } else if (icon) {
    showSlot = <ElIcon>{icon}</ElIcon>
  }

  return (
    <div
      {...props}
      className={clsx(
        'el-avatar',
        styles['el-avatar'],
        isLarge ? styles['el-avatar--large'] : '',
        isSmall ? styles['el-avatar--small'] : '',
        styles[`el-avatar--${shape}`],
        className
      )}
      style={{ ...style, ...sizeStyle }}
    >
      {showSlot}
    </div>
  )
}

export default ElAvatar
