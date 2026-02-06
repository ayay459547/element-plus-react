import clsx from 'clsx'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import './ElRadio.scss'
import type { ElRadioProps } from './types'
import { useRadioContext } from './useRadioContext'

const COMPONENT_NAME = 'ElRadio'

const ElRadio = forwardRef<HTMLInputElement, ElRadioProps>((props, ref) => {
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
    changeEvent
  } = useRadioContext()

  const isChecked = `${groupValue}` === `${value}`

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
    changeEvent?.(e)
    onChange?.(e)
  }

  return (
    <label
      className={clsx(
        'el-radio',
        isLarge ? 'el-radio--large' : '',
        isSmall ? 'el-radio--small' : '',
        isChecked ? 'is-checked' : '',
        isDisabled ? 'is-disabled' : '',
        border ? 'is-bordered' : '',
        className
      )}
      style={style}
    >
      <span
        className={clsx(
          'el-radio__input',
          isChecked ? 'is-checked' : '',
          isDisabled ? 'is-disabled' : ''
        )}
      >
        <input
          {...rest}
          ref={ref}
          className={clsx('el-radio__original')}
          value={`${value}`}
          type="radio"
          name={name || groupName}
          checked={isChecked}
          onChange={onChangeHandler}
        />
        <span className={clsx('el-radio__inner')}></span>
      </span>
      {showLabel && <span className={clsx('el-radio__label')}>{showLabel}</span>}
    </label>
  )
})

ElRadio.displayName = COMPONENT_NAME

export default ElRadio
