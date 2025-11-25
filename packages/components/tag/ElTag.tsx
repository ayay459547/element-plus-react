import clsx from 'clsx'
import React from 'react'
// import { CSSTransition } from 'react-transition-group'
import Transition from '@element-plus/components/transition/Transition.tsx'
import { Close } from '@ricons/ionicons5'
import { Icon } from '@ricons/utils'
import styles from './ElTag.module.scss'
import type { TagProps } from './types'

export const ElTag: React.FC<TagProps> = ({
  type = 'primary',
  effect = 'light',
  size,
  hit,
  round,
  closable,
  disableTransitions,
  color,
  onClick,
  onClose,
  children,
  className = '',
  style
}) => {
  const content = (
    <span
      className={clsx(
        styles['el-tag'],
        styles[`el-tag--${type}`],
        effect && styles[`el-tag--${effect}`],
        size && styles[`el-tag--${size}`],
        hit ? styles['is-hit'] : '',
        round ? styles['is-round'] : '',
        closable ? styles['is-closable'] : '',
        className
      )}
      style={{ backgroundColor: color, ...style }}
      onClick={(e) => onClick?.(e)}
    >
      <span className="el-tag__content">{children}</span>

      {closable && (
        <span
          className="el-tag__close"
          onClick={(e) => {
            e.stopPropagation()
            onClose?.(e)
          }}
        >
          <Icon>
            <Close />
          </Icon>
        </span>
      )}
    </span>
  )

  // no transition
  if (disableTransitions) return content

  // with transition
  return (
    <Transition inProp appear duration={150}>
      {content}
    </Transition>
  )
}

export default ElTag
