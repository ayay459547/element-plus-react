import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useState } from 'react'
import styles from './ElCheckbox.module.scss'
import type { ElCheckboxGroupProps, ElCheckboxProps } from './types'
import { useCheckboxGroup } from './useCheckboxGroup'

const ElCheckbox: React.FC<ElCheckboxProps> = ({
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
}) => {
  const {
    groupValue,
    size: groupSize,
    min,
    max,
    disabled: groupDisabled,
    changeEvent
  } = useCheckboxGroup()

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
        styles['el-checkbox-button'],
        isLarge ? styles['el-checkbox-button--large'] : '',
        isSmall ? styles['el-checkbox-button--small'] : '',
        isChecked ? styles['is-checked'] : '',
        isDisabled ? styles['is-disabled'] : '',
        border ? styles['is-bordered'] : '',
        className
      )}
      style={style}
    >
      <span
        className={clsx(
          'el-checkbox-button__input',
          styles['el-checkbox-button__input'],
          isChecked ? styles['is-checked'] : '',
          isDisabled ? styles['is-disabled'] : '',
          indeterminate ? styles['is-indeterminate'] : ''
        )}
      >
        <input
          {...{
            ...rest,
            'tab-index': tabIndex,
            id,
            'aria-controls': ariaControls,
            'aria-label': ariaLabel
          }}
          className={clsx('el-checkbox-button__original', styles['el-checkbox-button__original'])}
          type="checkbox"
          disabled={isDisabled}
          name={name}
          checked={isChecked}
          value={String(checkboxValue ?? '')}
          onChange={onChangeHandler}
        />
        {showLabel && (
          <span className={clsx('el-checkbox-button__inner', styles['el-checkbox-button__inner'])}>
            {showLabel}
          </span>
        )}
      </span>
    </label>
  )
}

export default ElCheckbox
