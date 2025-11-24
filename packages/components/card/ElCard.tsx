import clsx from 'clsx'
import type { CSSProperties, ReactNode } from 'react'
import React from 'react'
import styles from './ElCard.module.scss'

export interface ElCardProps {
  header?: ReactNode
  footer?: ReactNode
  shadow?: 'always' | 'hover' | 'never'
  bodyClass?: string
  headerClass?: string
  footerClass?: string
  bodyStyle?: CSSProperties
  children?: ReactNode
  className?: string
}

export const ElCard: React.FC<ElCardProps> = ({
  header,
  footer,
  shadow,
  bodyClass,
  headerClass,
  footerClass,
  bodyStyle,
  children,
  className
}) => {
  const shadowValue = shadow || 'always'

  const isAlwaysShadow = shadowValue === 'always'
  const isHoverShadow = shadowValue === 'hover'

  return (
    <div
      className={clsx(
        styles['el-card'],
        styles[isAlwaysShadow ? 'is-always-shadow' : ''],
        styles[isHoverShadow ? 'is-hover-shadow' : ''],
        className
      )}
    >
      {header && <div className={clsx(styles['el-card__header'], headerClass)}>{header}</div>}

      <div className={`${styles['el-card__body']} ${bodyClass || ''}`} style={bodyStyle}>
        {children}
      </div>

      {footer && <div className={clsx(styles['el-card__footer'], footerClass)}>{footer}</div>}
    </div>
  )
}
export default ElCard
