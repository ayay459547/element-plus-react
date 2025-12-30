import clsx from 'clsx'
import styles from './ElCard.module.scss'
import type { ElCardProps } from './types'

export const ElCard: React.FC<ElCardProps> = ({
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
}) => {
  return (
    <div
      {...props}
      className={clsx('el-card', styles['el-card'], styles[`is-${shadow}-shadow`], className)}
      style={style}
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
