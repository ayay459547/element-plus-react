import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import Loading from '@ayay459547/element-plus-react/icons-svg/loading.svg?react'
import clsx from 'clsx'
import type { ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'
import styles from './ElButton.module.scss'
import type { ElButtonProps } from './types'

const insertSpaceIfTwoChinese = (text: string): string => {
  if (/^[\u4e00-\u9fa5]{2}$/.test(text)) {
    return text[0] + ' ' + text[1]
  }
  return text
}

const COMPONENT_NAME = 'ElButton'

const ElButton = forwardRef<HTMLElement, ElButtonProps<any>>(
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
        ref={ref} // 將 ref 綁定到真實的 DOM 節點上
        {...rest}
        autoFocus={autoFocus}
        // dark={`${dark}`} // 移除：這會導致 React 警告 "Received `false` for a non-boolean attribute `dark`"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        type={Tag === 'button' ? nativeType : undefined} // 只有 tag 是 button 時才傳 type
        onClick={onClick}
        className={clsx(
          'el-button',
          styles['el-button'],
          isLarge && styles['el-button--large'],
          isSmall && styles['el-button--small'],
          typeof type === 'string' && type.length > 0 && styles[`el-button--${type}`],
          disabled && styles['is-disabled'],
          plain && styles['is-plain'],
          text && styles['is-text'],
          bg && styles['is-has-bg'],
          link && styles['is-link'],
          round && styles['is-round'],
          circle && styles['is-circle'],
          loading && styles['is-loading'],
          dark && styles['is-dark'], // 建議：用 class 來控制 dark 樣式
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
