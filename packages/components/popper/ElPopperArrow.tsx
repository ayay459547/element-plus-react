import { FloatingArrow } from '@floating-ui/react'
import clsx from 'clsx'
import styles from './ElPopper.module.scss'
import type { ElPopperArrowProps } from './types'
import { usePopperContext } from './usePopper'

const ElPopperArrow: React.FC<ElPopperArrowProps> = () => {
  const { setArrowElement, context } = usePopperContext()

  if (context === null) return null

  return (
    <FloatingArrow
      ref={(element) => {
        setArrowElement(element)
      }}
      context={context}
      className={clsx('el-popper__arrow', styles['el-popper__arrow'])}
      data-popper-arrow
    />
  )
}

export default ElPopperArrow
