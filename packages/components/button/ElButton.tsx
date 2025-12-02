import { Loader } from '@ricons/tabler'
import clsx from 'clsx'
import styles from './ElButton.module.scss'
import type { ButtonProps } from './types'

const ElButton: React.FC<ButtonProps> = ({
  size,
  type,
  plain = false,
  text = false,
  bg = false,
  link = false,
  round = false,
  circle = false,
  loading = false,
  loadingIcon = <Loader />,
  disabled = false,
  icon,
  autofocus = false,
  nativeType = 'button',
  autoInsertSpace = false,
  color,
  dark = false,
  tag = 'button',
  children,
  className,
  style = {},
  onClick,
  ...rest
}) => {
  const Tag = tag || 'button'

  return (
    <Tag
      type={nativeType}
      onClick={onClick}
      className={clsx(
        styles['el-button'],
        typeof type === 'string' && type.length > 0 && styles[`el-button--${type}`],
        plain ? styles['is-plain'] : '',
        round ? styles['is-round'] : '',
        circle ? styles['is-circle'] : '',
        className
      )}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default ElButton
