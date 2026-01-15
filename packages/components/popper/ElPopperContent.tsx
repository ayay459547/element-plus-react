// import ElFocusTrap from '@ayay459547/element-plus-react/components/focus-trap/ElFocusTrap.tsx'
import { createPortal } from 'react-dom'
import type { ElPopperContentProps } from './types'
import { usePopperContext } from './usePopper'

const ElPopperContent: React.FC<ElPopperContentProps> = ({
  children,
  teleportTo = document.body
}) => {
  const { setPopperEl } = usePopperContext()

  return createPortal(
    <div ref={setPopperEl} className="el-popper">
      {children}
    </div>,
    teleportTo
  )

  // return (
  //   <div>
  //     <ElFocusTrap>{children}</ElFocusTrap>
  //   </div>
  // )
}

export default ElPopperContent
