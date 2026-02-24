import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

type VPOverlayProps = {
  show: boolean
} & React.HTMLAttributes<HTMLElement>

const VPOverlay: React.FC<VPOverlayProps> = ({ show, ...props }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  return (
    <CSSTransition
      in={show}
      timeout={200}
      classNames={'el-modal'}
      nodeRef={modalRef}
      unmountOnExit
      appear
      enter
      exit
    >
      <div ref={modalRef} className="overlay" {...props} />
    </CSSTransition>
  )
}

export default VPOverlay
