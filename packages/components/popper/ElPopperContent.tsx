// import ElFocusTrap from '@ayay459547/element-plus-react/components/focus-trap/ElFocusTrap.tsx'
import ElPopperArrow from '@ayay459547/element-plus-react/components/popper/ElPopperArrow.tsx'
import ElTeleport from '@ayay459547/element-plus-react/components/teleport/ElTeleport.tsx'
import { useFloating, useHover } from '@floating-ui/react'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './ElPopper.scss'
import type { ElPopperContentProps } from './types'
import { usePopperContext } from './usePopperContext'

const ElPopperContent: React.FC<ElPopperContentProps> = ({ children }) => {
  const {
    isOpen,
    floatingStyles,
    setFloating,
    getFloatingProps,
    middlewareData,

    // props
    appendTo,
    effect,
    placement,
    disabled,
    transition,
    showArrow,
    popperClass,
    popperStyle,
    enterable,
    teleported
  } = usePopperContext()

  const contentRef = useRef<HTMLElement>(null)

  const [isHover, setIsHover] = useState(false)
  const { refs, context } = useFloating({
    open: isHover,
    onOpenChange: setIsHover
  })
  useHover(context)

  const isVisible = disabled ? false : isOpen || (enterable && isHover)

  return (
    <ElTeleport appendTo={teleported ? appendTo : null}>
      <CSSTransition
        in={isVisible} // 控制進場/出場
        timeout={500} // 動畫時間 (毫秒)
        classNames={clsx(transition ?? 'el-fade-in-linear')} // 對應 CSS class
        unmountOnExit // 隱藏時從 DOM 移除 (符合 Tooltip 行為)
        nodeRef={contentRef} // 綁定 ref
        appear // 初次渲染如果為 true 也執行動畫
        enter
        exit
      >
        <div
          ref={(element) => {
            setFloating(element)
            refs.setReference(element)
            contentRef.current = element
          }}
          style={{ ...floatingStyles, ...popperStyle }}
          className={clsx(popperClass, 'el-popper', `is-${effect}`)}
          {...getFloatingProps()}
          data-popper-placement={middlewareData.offset?.placement ?? placement}
        >
          {children}
          {showArrow && <ElPopperArrow />}
        </div>
      </CSSTransition>
    </ElTeleport>
  )

  // return (
  //   <div>
  //     <ElFocusTrap>{children}</ElFocusTrap>
  //   </div>
  // )
}

export default ElPopperContent
