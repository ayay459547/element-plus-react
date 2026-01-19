// import ElFocusTrap from '@ayay459547/element-plus-react/components/focus-trap/ElFocusTrap.tsx'
import clsx from 'clsx'
import styles from './ElPopper.module.scss'
import type { ElPopperContentProps } from './types'
import { usePopperContext } from './usePopper'

const ElPopperContent: React.FC<ElPopperContentProps> = ({ children }) => {
  const { isOpen, floatingStyles, setFloating, getFloatingProps } = usePopperContext()

  // if (!isOpen) return null

  return (
    <div
      ref={(element) => setFloating(element)}
      style={{ ...floatingStyles }}
      className={clsx('el-popper', styles['el-popper'])}
      {...getFloatingProps()}
    >
      {children}
    </div>
  )

  // return (
  //   <div>
  //     <ElFocusTrap>{children}</ElFocusTrap>
  //   </div>
  // )
}

export default ElPopperContent
