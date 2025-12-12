// import { Loader } from '@ricons/tabler'
import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'
import Loading from '@element-plus/icons-svg/loading.svg?react'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './ElButton.module.scss'
import type { ElButtonProps } from './types'

const ElButton = <T extends React.ElementType = 'button'>(props: ElButtonProps<T>) => {
  const {
    size,
    type,
    plain = false,
    text = false,
    bg = false,
    link = false,
    round = false,
    circle = false,
    loading = false,
    // loadingIcon = <Loader />,
    loadingIcon,
    loadingSlot,
    disabled = false,
    icon,
    autofocus = false,
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
  } = props

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

  return (
    <Tag
      {...rest}
      autofocus={autofocus}
      autoInsertSpace={autoInsertSpace}
      dark={dark}
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
      style={{ ...style }}
    >
      {loading ? showLoading : icon && <ElIcon>{icon}</ElIcon>}
      {children && <span>{children}</span>}
    </Tag>
  )
}

export default ElButton
