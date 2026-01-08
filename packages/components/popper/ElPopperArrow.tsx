import clsx from 'clsx'
import styles from './ElPopper.module.scss'
import type { ElPopperArrowProps } from './types'

const ElPopperArrow: React.FC<ElPopperArrowProps> = () => {
  return (
    <span className={clsx('el-popper__arrow', styles['el-popper__arrow'])} data-popper-arrow></span>
  )
}

export default ElPopperArrow
