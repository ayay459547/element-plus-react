import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import ElOverlay from '@ayay459547/element-plus-react/components/overlay/ElOverlay.tsx'
import ElTeleport from '@ayay459547/element-plus-react/components/teleport/ElTeleport.tsx'
import { useLockScreen } from '@ayay459547/element-plus-react/hooks/useLockscreen.ts'
import Close from '@ayay459547/element-plus-react/icons-svg/close.svg?react'
import { mergeRefs } from '@ayay459547/element-plus-react/utils/refs'
import { isNumber } from '@ayay459547/element-plus-react/utils/types'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './ElDrawer.scss'
import { useResizable } from './hooks/useResizable'
import type { ElDrawerProps } from './types'

const COMPONENT_NAME = 'ElDrawer'

const ElDrawer: React.FC<ElDrawerProps> = forwardRef<HTMLDivElement, ElDrawerProps>(
  (props, ref) => {
    const {
      visible = false,
      onVisible,
      appendToBody = false,
      appendTo = document.body,
      lockScroll = true,
      direction = 'rtl',
      showClose = true,
      size = '30%',
      children,
      className,
      style,
      title,
      withHeader = true,
      headerClass,
      bodyClass,
      footerClass,
      zIndex = 2000,
      headerAriaLevel = '2',
      header,
      footer
    } = props

    const modalRef = useRef<HTMLDivElement>(null)
    const drawerRef = useRef<HTMLDivElement>(null)

    const [overlayDisplay, setOverlayDisplay] = useState<CSSProperties['display']>('none')

    useEffect(() => {
      const delayTime = visible ? 0 : 200
      const newOverlayDisplay = visible ? 'block' : 'none'
      setTimeout(() => {
        setOverlayDisplay(newOverlayDisplay)
      }, delayTime)

      // if (!visible && typeof beforeClose === 'function') {
      //   beforeClose()
      // }
    }, [visible])

    const {
      size: styleSize,
      isResizing,
      isHorizontal
    } = useResizable({
      ...props,
      size,
      direction
    })

    useLockScreen(lockScroll && visible)

    const onModalClick = () => {
      if (typeof onVisible === 'function') {
        onVisible(false)
      }
    }

    const handleClose = () => {
      onModalClick()
    }

    const titleId = useId()

    const bodyId = useId()

    return (
      <ElTeleport appendTo={appendTo} disabled={appendTo !== 'body' ? false : !appendToBody}>
        <CSSTransition
          in={visible} // 控制進場/出場
          timeout={200} // 動畫時間 (毫秒)
          classNames={'el-modal'} // 對應 CSS class
          nodeRef={modalRef} // 綁定 ref
          appear
          enter
          exit
        >
          <ElOverlay
            ref={modalRef}
            className={clsx('is-drawer', 'el-modal-drawer')}
            style={{ display: visible ? 'block' : overlayDisplay }}
            zIndex={zIndex}
            onClick={() => onModalClick()}
          >
            <CSSTransition
              in={visible} // 控制進場/出場
              timeout={300} // 動畫時間 (毫秒)
              classNames={`el-drawer-${direction}`} // 對應 CSS class
              nodeRef={drawerRef} // 綁定 ref
              appear
              enter
              exit
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

                {withHeader && (
                  <header className={clsx('el-drawer__header', headerClass)}>
                    {header ?? (
                      <span
                        id={titleId}
                        role="heading"
                        aria-level={isNumber(headerAriaLevel) ? Number(headerAriaLevel) : 2}
                        className={clsx('el-drawer__title')}
                      >
                        {title}
                      </span>
                    )}

                    {showClose && (
                      <button
                        aria-label="close-btn"
                        className={clsx('el-drawer__close-btn')}
                        type="button"
                        onClick={handleClose}
                      >
                        <ElIcon className={clsx('el-drawer__close')}>
                          <Close />
                        </ElIcon>
                      </button>
                    )}
                  </header>
                )}

                <div className={clsx('el-drawer__body', bodyClass)}>{children}</div>

                {footer && <div className={clsx('el-drawer__footer', footerClass)}>{footer}</div>}
              </div>
            </CSSTransition>
          </ElOverlay>
        </CSSTransition>
      </ElTeleport>
    )
  }
)

ElDrawer.displayName = COMPONENT_NAME

export default ElDrawer
