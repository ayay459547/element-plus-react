import ElFocusTrap from '@ayay459547/element-plus-react/components/focus-trap/ElFocusTrap.tsx'
import type { ElPopperContentProps } from './types'

const ElPopperContent: React.FC<ElPopperContentProps> = ({ children }) => {
  return (
    <div>
      <ElFocusTrap>{children}</ElFocusTrap>
    </div>
  )
}

export default ElPopperContent
