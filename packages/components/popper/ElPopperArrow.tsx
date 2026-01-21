// import { FloatingArrow } from '@floating-ui/react'
import clsx from 'clsx'
import styles from './ElPopper.module.scss'
import type { ElPopperArrowProps } from './types'
import { usePopperContext } from './usePopper'

const ElPopperArrow: React.FC<ElPopperArrowProps> = () => {
  const { setArrowElement, context, middlewareData } = usePopperContext()

  if (context === null) return null

  return (
    <span
      ref={(element) => {
        setArrowElement(element)
      }}
      style={{
        position: 'absolute',
        left: middlewareData.arrow?.x,
        top: middlewareData.arrow?.y
      }}
      className={clsx('el-popper__arrow', styles['el-popper__arrow'])}
      data-popper-arrow
    />
  )
}

export default ElPopperArrow
