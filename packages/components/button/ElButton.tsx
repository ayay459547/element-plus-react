import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import Loading from '@ayay459547/element-plus-react/icons-svg/loading.svg?react'
import clsx from 'clsx'
import type { ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'
import './ElButton.scss'
import type { ElButtonProps } from './types'

const insertSpaceIfTwoChinese = (text: string): string => {
  if (/^[\u4e00-\u9fa5]{2}$/.test(text)) {
    return text[0] + ' ' + text[1]
  }
  return text
}

const COMPONENT_NAME = 'ElButton'

const ElButton: React.FC<ElButtonProps> = forwardRef<HTMLElement, ElButtonProps<any>>(
  (
    {
      size,
      type,
      plain = false,
      text = false,
      bg = false,
      link = false,
      round = false,
      circle = false,
      loading = false,
      loadingIcon,
      loadingSlot,
      disabled = false,
      icon,
      autoFocus = false,
      nativeType = 'button',
      autoInsertSpace = false,
      // color,
      dark = false,
      tag,
      children,
      className,
      style = {},
      onClick,
      ...rest
    },
    ref // 3. 接收 ref 參數
  ) => {
    const Tag = (tag || 'button') as ElementType

    const isDisabled = disabled || loading
    const isLarge = size === 'large'
    const isSmall = size === 'small'

    let showLoading: ReactNode = (
      <ElIcon loading>
        <Loading />
      </ElIcon>
    )
    if (loadingSlot) {
      showLoading = loadingSlot
    } else if (loadingIcon) {
      showLoading = <ElIcon loading>{loadingIcon}</ElIcon>
    }

    let displayText = children
    if (autoInsertSpace && typeof children === 'string') {
      displayText = insertSpaceIfTwoChinese(children)
    }

    return (
      <Tag
        {...rest}
        ref={ref} // 將 ref 綁定到真實的 DOM 節點上
        autoFocus={autoFocus}
        // dark={`${dark}`} // 移除：這會導致 React 警告 "Received `false` for a non-boolean attribute `dark`"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        type={Tag === 'button' ? nativeType : undefined} // 只有 tag 是 button 時才傳 type
        onClick={onClick}
        className={clsx(
          'el-button',
          isLarge && 'el-button--large',
          isSmall && 'el-button--small',
          typeof type === 'string' && type.length > 0 && `el-button--${type}`,
          disabled && 'is-disabled',
          plain && 'is-plain',
          text && 'is-text',
          bg && 'is-has-bg',
          link && 'is-link',
          round && 'is-round',
          circle && 'is-circle',
          loading && 'is-loading',
          dark && 'is-dark',
          className
        )}
        style={style}
      >
        {loading ? showLoading : icon && <ElIcon>{icon}</ElIcon>}
        {children && <span>{displayText}</span>}
      </Tag>
    )
  }
)

ElButton.displayName = COMPONENT_NAME

export default ElButton
