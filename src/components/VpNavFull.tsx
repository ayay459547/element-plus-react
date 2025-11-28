import React, { useRef } from 'react'
// import { useLockScreen } from '../hooks/useLockScreen'

// 子組件
// import VPFullScreenMenu from './full-screen/vp-menu'
// import VPFullScreenThemeToggler from './full-screen/vp-theme-toggler'
// import VPFullScreenTranslation from './full-screen/vp-translation'

interface Props {
  fullScreen: boolean
  onClose?: () => void
}

const VpNavFull: React.FC<Props> = ({ fullScreen }) => {
  // const { lock, cleanup } = useLockScreen()
  const fullscreenRef = useRef<HTMLDivElement>(null)

  // 等同 Vue <Transition name="el-fade-in" @enter="lock" @after-leave="cleanup">
  // useEffect(() => {
  //   if (fullScreen) {
  //     lock()
  //   } else {
  //     cleanup()
  //   }
  // }, [fullScreen, lock, cleanup])

  return (
    <>
      {fullScreen && (
        <div ref={fullscreenRef} className="full-screen el-fade-in-enter-active">
          <div className="full-screen-container">
            {/* <VPFullScreenMenu onClose={onClose} /> */}
            {/* <VPFullScreenTranslation onClose={onClose} /> */}
            {/* <VPFullScreenThemeToggler /> */}
          </div>
        </div>
      )}
    </>
  )
}

export default VpNavFull
