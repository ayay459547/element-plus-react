import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './ElLink.module.scss'
import type { ElLinkProps } from './types'

const COMPONENT_NAME = 'ElLink'

const ElLink: React.FC<ElLinkProps> = forwardRef<HTMLAnchorElement, ElLinkProps>(
  (
    {
      type = 'default',
      underline = 'hover',
      disabled = false,
      href,
      target = '_self',
      icon,
      children,
      iconSlot,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const isUnderline = underline === 'always'
    const isHoverUnderline = underline === 'hover' && !disabled

    return (
      <a
        {...props}
        ref={ref}
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
        style={style}
      >
        {icon && <ElIcon>{icon}</ElIcon>}
        <span className={clsx('el-link__inner', styles['el-link__inner'])}>{children}</span>
        {iconSlot}
      </a>
    )
  }
)

ElLink.displayName = COMPONENT_NAME

export default ElLink
