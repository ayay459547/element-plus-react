import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'
import clsx from 'clsx'
import styles from './ElLink.module.scss'
import type { ElLinkProps } from './types'

const ElLink: React.FC<ElLinkProps> = ({
  type = 'default',
  underline = 'hover',
  disabled = false,
  href,
  target = '_self',
  icon,
  children,
  iconSlot,
  className,
  style
}) => {
  const isUnderline = underline === 'always'
  const isHoverUnderline = underline === 'hover' && !disabled

  return (
    <a
      href={href}
      target={target}
      className={clsx(
        'el-link',
        styles['el-link'],
        type ? styles[`el-link--${type}`] : '',
        disabled ? styles['is-disabled'] : '',
        isUnderline ? styles['is-underline'] : '',
        isHoverUnderline ? styles['is-hover-underline'] : '',
        className
      )}
      style={{ ...style }}
    >
      {icon && <ElIcon>{icon}</ElIcon>}
      <span className={clsx('el-link__inner', styles['el-link__inner'])}>{children}</span>
      {iconSlot}
    </a>
  )
}

export default ElLink
