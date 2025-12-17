import clsx from 'clsx'
import React from 'react'
// import { CSSTransition } from 'react-transition-group'
import Transition from '@ayay/element-plus-react/components/transition/Transition.tsx'

import { IoClose } from 'react-icons/io5'
import styles from './ElTag.module.scss'
import type { ElTagProps } from './types'

export const ElTag: React.FC<ElTagProps> = ({
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
  style,
  ...props
}) => {
  const content = (
    <span
      {...props}
      className={clsx(
        'el-tag',
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
      <span className={styles['el-tag__content']}>{children}</span>

      {closable && (
        <span
          className={styles['el-tag__close']}
          onClick={(e) => {
            e.stopPropagation()
            onClose?.(e)
          }}
        >
          <IoClose />
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
