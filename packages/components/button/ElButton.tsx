import ElIcon from 'ayay-element-plus-react/components/icon/ElIcon.tsx'
import Loading from 'ayay-element-plus-react/icons-svg/loading.svg?react'
import clsx from 'clsx'
import type { ElementType, ReactNode } from 'react'
import styles from './ElButton.module.scss'
import type { ElButtonProps } from './types'

const insertSpaceIfTwoChinese = (text: string): string => {
  if (/^[\u4e00-\u9fa5]{2}$/.test(text)) {
    return text[0] + ' ' + text[1]
  }
  return text
}

const ElButton = <T extends ElementType = 'button'>({
  size,
  type,
  plain = false,
  text = false,
  bg = false,
  link = false,
  round = false,
  circle = false,
  loading = false,
  loadingIcon,
  loadingSlot,
  disabled = false,
  icon,
  autoFocus = false,
  nativeType = 'button',
  autoInsertSpace = false,
  // color,
  dark = false,
  tag,
  children,
  className,
  style = {},
  onClick,
  ...rest
}: ElButtonProps<T>) => {
  const Tag = tag || 'button'

  const isDisabled = disabled || loading

  const isLarge = size === 'large'
  const isSmall = size === 'small'

  let showLoading: ReactNode = (
    <ElIcon loading>
      <Loading />
    </ElIcon>
  )
  if (loadingSlot) {
    showLoading = loadingSlot
  } else if (loadingIcon) {
    showLoading = <ElIcon loading>{loadingIcon}</ElIcon>
  }

  let displayText = children
  if (autoInsertSpace && typeof children === 'string') {
    displayText = insertSpaceIfTwoChinese(children)
  }

  return (
    <Tag
      {...rest}
      autoFocus={autoFocus}
      dark={`${dark}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type={nativeType}
      onClick={onClick}
      className={clsx(
        'el-button',
        styles['el-button'],
        isLarge ? styles['el-button--large'] : '',
        isSmall ? styles['el-button--small'] : '',
        typeof type === 'string' && type.length > 0 && styles[`el-button--${type}`],
        disabled ? styles['is-disabled'] : '',
        plain ? styles['is-plain'] : '',
        text ? styles['is-text'] : '',
        bg ? styles['is-has-bg'] : '',
        link ? styles['is-link'] : '',
        round ? styles['is-round'] : '',
        circle ? styles['is-circle'] : '',
        loading ? styles['is-loading'] : '',
        className
      )}
      style={style}
    >
      {loading ? showLoading : icon && <ElIcon>{icon}</ElIcon>}
      {children && <span>{displayText}</span>}
    </Tag>
  )
}

export default ElButton
