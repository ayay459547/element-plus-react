import clsx from 'clsx'
import React from 'react'
import styles from './ElCard.module.scss'
import type { ElCardProps } from './types'

export const ElCard: React.FC<ElCardProps> = ({
  header,
  footer,
  shadow,
  bodyClass,
  headerClass,
  footerClass,
  bodyStyle,
  children,
  className,
  style,
  ...props
}) => {
  const shadowValue = shadow || 'always'

  const isAlwaysShadow = shadowValue === 'always'
  const isHoverShadow = shadowValue === 'hover'

  return (
    <div
      {...props}
      className={clsx(
        'el-card',
        styles['el-card'],
        styles[isAlwaysShadow ? 'is-always-shadow' : ''],
        styles[isHoverShadow ? 'is-hover-shadow' : ''],
        className
      )}
      style={{ ...style }}
    >
      {header && (
        <div className={clsx('el-card__header', styles['el-card__header'], headerClass)}>
          {header}
        </div>
      )}

      <div className={clsx('el-card__body', styles['el-card__body'], bodyClass)} style={bodyStyle}>
        {children}
      </div>

      {footer && (
        <div className={clsx('card__footer', styles['el-card__footer'], footerClass)}>{footer}</div>
      )}
    </div>
  )
}
export default ElCard
