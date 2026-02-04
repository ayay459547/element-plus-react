import clsx from 'clsx'
import { forwardRef } from 'react'
import styles from './ElCard.module.scss'
import type { ElCardProps } from './types'

const COMPONENT_NAME = 'ElCard'

const ElCard = forwardRef<HTMLDivElement, ElCardProps>(
  (
    {
      bodyStyle,
      headerClass,
      bodyClass,
      footerClass,
      shadow = 'always',
      children,
      header,
      footer,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={clsx('el-card', styles['el-card'], styles[`is-${shadow}-shadow`], className)}
        style={style}
      >
        {header && (
          <div className={clsx('el-card__header', styles['el-card__header'], headerClass)}>
            {header}
          </div>
        )}

        <div
          className={clsx('el-card__body', styles['el-card__body'], bodyClass)}
          style={bodyStyle}
        >
          {children}
        </div>

        {footer && (
          <div className={clsx('card__footer', styles['el-card__footer'], footerClass)}>
            {footer}
          </div>
        )}
      </div>
    )
  }
)

ElCard.displayName = COMPONENT_NAME

export default ElCard
