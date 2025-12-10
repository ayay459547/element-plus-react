// import { Loader } from '@ricons/tabler'
import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'
import Loading from '@element-plus/icons-svg/loading.svg?react'
import clsx from 'clsx'
import styles from './ElButton.module.scss'
import type { ElButtonProps } from './types'

const ElButton: React.FC<ElButtonProps> = ({
  size,
  type,
  plain = false,
  text = false,
  bg = false,
  link = false,
  round = false,
  circle = false,
  loading = false,
  // loadingIcon = (
  //   <ElIcon>
  //     <Loader />
  //   </ElIcon>
  // ),
  loadingIcon = (
    <ElIcon>
      <Loading />
    </ElIcon>
  ),
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
  ...props
}) => {
  const Tag = tag || 'button'

  return (
    <Tag
      {...props}
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
    >
      {children}
    </Tag>
  )
}

export default ElButton
