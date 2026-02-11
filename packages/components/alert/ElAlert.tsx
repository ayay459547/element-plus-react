import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import { TypeComponents, TypeComponentsMap } from '@ayay459547/element-plus-react/utils/react/icon'
import { mergeRefs } from '@ayay459547/element-plus-react/utils/refs'
import clsx from 'clsx'
import { forwardRef, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './ElAlert.scss'
import type { ElAlertProps } from './types'

const COMPONENT_NAME = 'ElAlert'

const ElAlert: React.FC<ElAlertProps> = forwardRef<HTMLDivElement, ElAlertProps>((props, ref) => {
  const {
    title,
    type = 'info',
    description,
    closable = true,
    center = false,
    closeText,
    showIcon = false,
    icon,
    effect = 'light',
    onClose,
    children,
    className,
    style
  } = props

  const [visible, setVisible] = useState(true)

  const { Close } = TypeComponents

  const contentRef = useRef<HTMLDivElement>(null)

  const IconComponent = TypeComponentsMap[type]

  const hasDesc =
    (typeof description === 'string' && description.length > 0) || children !== undefined

  const close: ElAlertProps['onClose'] = (evt) => {
    setVisible(false)
    if (typeof onClose === 'function') {
      onClose(evt)
    }
  }

  return (
    <CSSTransition
      in={visible} // 控制進場/出場
      timeout={500} // 動畫時間 (毫秒)
      classNames="el-fade-in-linear" // 對應 CSS class
      unmountOnExit // 隱藏時從 DOM 移除 (符合 Tooltip 行為)
      nodeRef={contentRef} // 綁定 ref
      appear // 初次渲染如果為 true 也執行動畫
      enter
      exit
    >
      <div
        ref={mergeRefs(ref, contentRef)}
        className={clsx(
          'el-alert',
          `el-alert--${type}`,
          `is-${effect}`,
          center ? 'is-center' : '',
          className
        )}
        style={{ ...style }}
      >
        {showIcon && (
          <ElIcon className={clsx('el-alert__icon', hasDesc ? 'is-big' : '')}>
            {icon || <IconComponent />}
          </ElIcon>
        )}

        <div className="el-alert__content">
          {title && typeof title === 'string' ? (
            <span className="el-alert__title">{title}</span>
          ) : (
            title
          )}

          {hasDesc && (children ?? <p className="el-alert__description">{description}</p>)}

          {closable &&
            (closeText ? (
              <div className={clsx('el-alert__close-btn', 'is-customed')} onClick={(e) => close(e)}>
                {closeText}
              </div>
            ) : (
              <ElIcon v-else className="el-alert__close-btn" onClick={(e) => close(e)}>
                <Close />
              </ElIcon>
            ))}
        </div>
      </div>
    </CSSTransition>
  )
})

ElAlert.displayName = COMPONENT_NAME

export default ElAlert
