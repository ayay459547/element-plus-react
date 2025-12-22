import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useState } from 'react'
import styles from './ElCheckbox.module.scss'
import type { ElCheckboxProps } from './types'

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
  tabindex,
  id,
  ariaControls,
  ariaLabel,
  children,
  className,
  style,
  onChange
}) => {
  const isLarge = size === 'large'
  const isSmall = size === 'small'

  let showLabel: ReactNode | string | null = null
  if (children) {
    showLabel = children
  } else if (label) {
    showLabel = `${label}`
  }
  const [checkboxValue, setCheckboxValue] = useState(value)

  const onChangeHandler: ElCheckboxProps['onChange'] = (e) => {
    const true_value = trueValue ?? true
    const false_value = falseValue ?? false
    const newValue = e.target.checked ? true_value : false_value
    setCheckboxValue(newValue)

    onChange?.(e)
  }

  return (
    <label
      className={clsx(
        'el-checkbox',
        styles['el-checkbox'],
        isLarge ? styles['el-checkbox--large'] : '',
        isSmall ? styles['el-checkbox--small'] : '',
        checked ? styles['is-checked'] : '',
        disabled ? styles['is-disabled'] : '',
        border ? styles['is-bordered'] : '',
        className
      )}
      style={{ ...style }}
    >
      <span
        className={clsx(
          'el-checkbox__input',
          styles['el-checkbox__input'],
          disabled ? styles['is-disabled'] : '',
          checked ? styles['is-checked'] : '',
          indeterminate ? styles['is-indeterminate'] : ''
        )}
      >
        <input
          className={clsx('el-checkbox__original', styles['el-checkbox__original'])}
          type="checkbox"
          disabled={disabled}
          name={name}
          checked={checked}
          value={String(checkboxValue ?? '')}
          onChange={onChangeHandler}
          {...{
            tabindex,
            id,
            ariaControls,
            ariaLabel
          }}
        />
        <span className={clsx('el-checkbox__inner', styles['el-checkbox__inner'])}></span>
      </span>
      {showLabel && (
        <span className={clsx('el-checkbox__label', styles['el-checkbox__label'])}>
          {showLabel}
        </span>
      )}
    </label>
  )
}

export default ElCheckbox
