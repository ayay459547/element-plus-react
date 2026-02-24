import { useLockScreen } from '@ayay459547/element-plus-react/hooks/useLockScreen.ts'
import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './VpNavFull.scss'

// 子組件
import VPFullScreenMenu from './full-screen/VPMenu'
// import VPFullScreenTranslation from './full-screen/VPTranslation'
// import VPFullScreenThemeToggler from './full-screen/VPThemeToggler'

interface VPNavFullProps {
  fullScreen: boolean
  onClose: () => void
}

const VPNavFull: React.FC<VPNavFullProps> = ({ fullScreen, onClose }) => {
  const fullscreenRef = useRef<HTMLDivElement>(null)

  useLockScreen(fullScreen)

  return (
    <CSSTransition
      in={fullScreen}
      timeout={100}
      classNames={'el-fade-in'}
      nodeRef={fullscreenRef}
      unmountOnExit
      appear
      enter
      exit
    >
      <div ref={fullscreenRef} className="full-screen el-fade-in-enter-active">
        <div className="full-screen-container">
          <VPFullScreenMenu onClose={() => onClose()} />
          {/* <VPFullScreenTranslation onClose={onClose} /> */}
          {/* <VPFullScreenThemeToggler /> */}
        </div>
      </div>
    </CSSTransition>
  )
}

export default VPNavFull
