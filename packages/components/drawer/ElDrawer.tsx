import ElOverlay from '@ayay459547/element-plus-react/components/overlay/ElOverlay.tsx'
import ElTeleport from '@ayay459547/element-plus-react/components/teleport/ElTeleport.tsx'
import { useLockscreen } from '@ayay459547/element-plus-react/hooks/useLockscreen.ts'
import { mergeRefs } from '@ayay459547/element-plus-react/utils/refs'
import clsx from 'clsx'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './ElDrawer.scss'
import { useResizable } from './hooks/useResizable'
import type { ElDrawerProps } from './types'

const COMPONENT_NAME = 'ElDrawer'

const ElDrawer: React.FC<ElDrawerProps> = forwardRef<HTMLDivElement, ElDrawerProps>(
  (props, ref) => {
    const {
      value = false,
      onValue,
      appendToBody = false,
      appendTo = document.body,
      lockScroll = true,
      beforeClose,
      closeOnClickModal = true,
      closeOnPressEscape = true,
      openDelay = 0,
      closeDelay = 0,
      destroyOnClose = false,
      modal = true,
      modalPenetrable = false,
      direction = 'rtl',
      resizable = false,
      showClose = true,
      size = '30%',
      children,
      className,
      style,
      title,
      withHeader = true,
      modalClass,
      headerClass,
      bodyClass,
      footerClass,
      zIndex,
      headerAriaLevel = '2',
      header,
      footer
    } = props

    const [visible, setVisible] = useState(value)

    useEffect(() => {
      setVisible(value)
    }, [value])

    const drawerRef = useRef<HTMLDivElement>(null)

    const {
      size: styleSize,
      isResizing,
      isHorizontal
    } = useResizable({
      ...props,
      size
    })

    useLockscreen(lockScroll && value)

    const onModalClick = () => {
      setVisible(false)
      if (typeof onValue === 'function') {
        onValue(false)
      }
    }

    const titleId = useId()

    const bodyId = useId()

    return (
      <ElTeleport appendTo={appendTo} disabled={appendTo !== 'body' ? false : !appendToBody}>
        <CSSTransition
          in={visible} // 控制進場/出場
          timeout={300} // 動畫時間 (毫秒)
          classNames={'el-fade-in-linear'} // 對應 CSS class
          nodeRef={drawerRef} // 綁定 ref
          appear // 初次渲染如果為 true 也執行動畫
          enter
          exit
        >
          <ElOverlay
            className={clsx('is-drawer', 'el-modal-drawer')}
            style={{ display: visible ? 'block' : 'none' }}
            onClick={() => onModalClick()}
          >
            <div
              ref={mergeRefs(ref, drawerRef)}
              aria-modal={true}
              aria-label={title || undefined}
              aria-labelledby={!title ? titleId : undefined}
              aria-describedby={bodyId}
              className={clsx(
                'el-drawer',
                isResizing ? 'is-dragging' : '',
                direction,
                visible ? 'open' : '',
                className
              )}
              style={{
                [isHorizontal ? 'width' : 'height']: styleSize,
                ...style
              }}
              role="dialog"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <span className="el-drawer__sr-focus" tabIndex={-1}></span>

              <header className={clsx('el-drawer__header', headerClass)}></header>

              <div className={clsx('el-drawer__body', bodyClass)}>children: {children}</div>
            </div>
          </ElOverlay>
        </CSSTransition>
      </ElTeleport>
    )
  }
)

ElDrawer.displayName = COMPONENT_NAME

export default ElDrawer
