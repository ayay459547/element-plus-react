import clsx from 'clsx'
import type { ReactNode } from 'react'
import { forwardRef, useState } from 'react'
import './ElCheckbox.scss'
import type { ElCheckboxGroupProps, ElCheckboxProps } from './types'
import { useCheckboxContext } from './useCheckboxContext'

const COMPONENT_NAME = 'ElCheckboxButton'

const ElCheckboxButton: React.FC<ElCheckboxProps> = forwardRef<HTMLInputElement, ElCheckboxProps>(
  (
    {
      value,
      label,
      trueValue,
      falseValue,
      disabled = false,
      border = false,
      size,
      name,
      checked = false,
      indeterminate = false,
      tabIndex,
      id,
      ariaControls,
      ariaLabel,
      children,
      className,
      style,
      onChange,
      ...rest
    },
    ref
  ) => {
    const {
      groupValue,
      size: groupSize,
      min,
      max,
      disabled: groupDisabled,
      changeEvent
    } = useCheckboxContext()

    const isChecked = (() => {
      if (value === null || value === undefined) return checked
      if (Array.isArray(groupValue)) return groupValue.includes(value)
      return checked
    })()

    const isDisabled = (() => {
      if (groupDisabled) return true
      if (value === null || value === undefined) return disabled
      if (groupValue?.length === (min ?? -1)) return groupValue?.includes(value)
      if (groupValue?.length === (max ?? -1)) return !groupValue?.includes(value)
      return disabled
    })()

    const showSize = size || groupSize
    const isLarge = showSize === 'large'
    const isSmall = showSize === 'small'

    let showLabel: ReactNode | string | null = null
    if (children) {
      showLabel = children
    } else if (label) {
      showLabel = `${label}`
    }
    const [checkboxValue, setCheckboxValue] = useState(value)

    const onChangeHandler: ElCheckboxProps['onChange'] = (e) => {
      const _isChecked = e.target.checked

      const newValue = _isChecked ? (trueValue ?? value) : falseValue
      setCheckboxValue(newValue)

      if (Array.isArray(groupValue)) {
        let newGroupValue: ElCheckboxGroupProps['value'] = []
        newGroupValue = [...groupValue]

        const valueIndex = newGroupValue.findIndex((_value) => {
          return _value === value
        })

        if (_isChecked && valueIndex === -1 && value) {
          newGroupValue.push(value)
        } else if (!_isChecked && valueIndex !== -1) {
          newGroupValue.splice(valueIndex, 1)
        }

        changeEvent?.(newGroupValue)
      }

      onChange?.(e)
    }

    return (
      <label
        className={clsx(
          'el-checkbox-button',
          isLarge ? 'el-checkbox-button--large' : '',
          isSmall ? 'el-checkbox-button--small' : '',
          isChecked ? 'is-checked' : '',
          isDisabled ? 'is-disabled' : '',
          border ? 'is-bordered' : '',
          className
        )}
        style={style}
      >
        <span
          className={clsx(
            'el-checkbox-button__input',
            isChecked ? 'is-checked' : '',
            isDisabled ? 'is-disabled' : '',
            indeterminate ? 'is-indeterminate' : ''
          )}
        >
          <input
            ref={ref}
            {...{
              ...rest,
              'tab-index': tabIndex,
              id,
              'aria-controls': ariaControls,
              'aria-label': ariaLabel
            }}
            className={clsx('el-checkbox-button__original')}
            type="checkbox"
            disabled={isDisabled}
            name={name}
            checked={isChecked}
            value={String(checkboxValue ?? '')}
            onChange={onChangeHandler}
          />
          {showLabel && <span className={clsx('el-checkbox-button__inner')}>{showLabel}</span>}
        </span>
      </label>
    )
  }
)

ElCheckboxButton.displayName = COMPONENT_NAME

export default ElCheckboxButton
