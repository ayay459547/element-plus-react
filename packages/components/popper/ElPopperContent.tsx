// import ElFocusTrap from '@ayay459547/element-plus-react/components/focus-trap/ElFocusTrap.tsx'
import ElTeleport from '@ayay459547/element-plus-react/components/teleport/ElTeleport.tsx'
import { useFloating, useHover } from '@floating-ui/react'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './ElPopper.module.scss'
import type { ElPopperContentProps } from './types'
import { usePopperContext } from './usePopper'

const ElPopperContent: React.FC<ElPopperContentProps> = ({ children }) => {
  const { isOpen, floatingStyles, setFloating, getFloatingProps, appendTo, effect } =
    usePopperContext()

  const contentRef = useRef<HTMLElement>(null)

  const [isHover, setIsHover] = useState(false)
  const { refs, context } = useFloating({
    open: isHover,
    onOpenChange: setIsHover
  })
  useHover(context)

  const isDark = effect === 'dark'

  return (
    <ElTeleport appendTo={appendTo}>
      <CSSTransition
        in={isOpen || isHover} // 控制進場/出場
        timeout={200} // 動畫時間 (毫秒)
        classNames={clsx('el-fade-in-linear')} // 對應 CSS class
        unmountOnExit // 隱藏時從 DOM 移除 (符合 Tooltip 行為)
        nodeRef={contentRef} // 綁定 ref
        appear // 初次渲染如果為 true 也執行動畫
      >
        <div
          ref={(element) => {
            setFloating(element)
            refs.setReference(element)
            contentRef.current = element
          }}
          style={{ ...floatingStyles }}
          className={clsx(
            'el-popper',
            styles['el-popper'],
            isDark ? styles['is-dark'] : styles['is-light']
          )}
          {...getFloatingProps()}
        >
          {children}
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
