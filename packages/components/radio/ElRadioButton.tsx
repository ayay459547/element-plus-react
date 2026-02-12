import clsx from 'clsx'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import './ElRadio.scss'
import type { ElRadioProps } from './types'
import { useRadioContext } from './useRadioContext'

const COMPONENT_NAME = 'ElRadioButton'

const ElRadioButton: React.FC<ElRadioProps> = forwardRef<HTMLInputElement, ElRadioProps>(
  (props, ref) => {
    const {
      value,
      label,
      disabled,
      border = false,
      size,
      name,
      children,
      className,
      style,
      onChange,
      ...rest
    } = props
    const {
      groupValue,
      size: groupSize,
      disabled: groupDisabled,
      name: groupName,
      textColor,
      fill,
      changeEvent
    } = useRadioContext()

    const isActive = `${groupValue}` === `${value}`

    const isDisabled = disabled || groupDisabled

    const showSize = size || groupSize
    const isLarge = showSize === 'large'
    const isSmall = showSize === 'small'

    let showLabel: ReactNode | string | null = null
    if (children) {
      showLabel = children
    } else if (label) {
      showLabel = `${label}`
    }

    const onChangeHandler: ElRadioProps['onChange'] = (e) => {
      if (isDisabled) return
      changeEvent?.(e)
      onChange?.(e)
    }

    const activeStyle = {
      ...style,
      backgroundColor: fill,
      borderColor: fill,
      boxShadow: fill ? `-1px 0 0 0 ${fill}` : '',
      color: textColor
    }

    return (
      <label
        className={clsx(
          'el-radio-button',
          isLarge ? 'el-radio-button--large' : '',
          isSmall ? 'el-radio-button--small' : '',
          isActive ? 'is-active' : '',
          isDisabled ? 'is-disabled' : '',
          border ? 'is-bordered' : '',
          className
        )}
        style={style}
      >
        <input
          {...rest}
          ref={ref}
          className={clsx('el-radio-button__original-radio')}
          value={`${value}`}
          type="radio"
          name={name || groupName}
          checked={isActive}
          onChange={onChangeHandler}
        />
        {showLabel && (
          <span
            className={clsx('el-radio-button__inner')}
            style={isActive ? activeStyle : undefined}
          >
            {showLabel}
          </span>
        )}
      </label>
    )
  }
)

ElRadioButton.displayName = COMPONENT_NAME

export default ElRadioButton
