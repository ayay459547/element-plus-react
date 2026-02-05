import clsx from 'clsx'
// import { CSSTransition } from 'react-transition-group'
import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import Transition from '@ayay459547/element-plus-react/components/transition/Transition.tsx'
import { forwardRef } from 'react'
import { IoClose } from 'react-icons/io5'
import styles from './ElTag.module.scss'
import type { ElTagProps } from './types'

const COMPONENT_NAME = 'ElTag'

const ElTag: React.FC<ElTagProps> = forwardRef<HTMLSpanElement, ElTagProps>(
  (
    {
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
    },
    ref
  ) => {
    const content = (
      <span
        {...props}
        ref={ref}
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
            <ElIcon>
              <IoClose />
            </ElIcon>
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
)

ElTag.displayName = COMPONENT_NAME

export default ElTag
