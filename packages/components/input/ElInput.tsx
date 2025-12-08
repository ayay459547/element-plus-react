import clsx from 'clsx'
import { useState } from 'react'
import styles from './ElInput.module.scss'
import type { ElInputProps } from './types'

const ElInput: React.FC<ElInputProps> = ({
  type = 'text',
  value,
  // modelModifier,
  maxlength,
  minlength,
  placeholder,
  disabled,
  size,
  prefix,
  suffix,
  prepend,
  append,
  className,
  style,
  onFocus,
  onBlur,
  onInput,
  onChange,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false)

  const [inputValue, setInputValue] = useState(value)

  const handleFocus: ElInputProps['onFocus'] = (e) => {
    setIsFocus(true)
    if (typeof onFocus === 'function') {
      onFocus(e)
    }
  }

  const handleBlur: ElInputProps['onBlur'] = (e) => {
    setIsFocus(false)
    if (typeof onBlur === 'function') {
      onBlur(e)
    }
  }

  const handleInput: ElInputProps['onInput'] = (e) => {
    if (typeof onInput === 'function') {
      onInput(e)
    }
  }

  const handleChange: ElInputProps['onChange'] = (e) => {
    setInputValue(e.target.value)
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  return (
    <div
      className={clsx(
        styles['el-input'],
        disabled ? styles['disabled'] : '',
        size ? styles[`el-input--${size}`] : '',
        className
      )}
      style={{ ...style }}
    >
      {/* prepend slot */}
      {prepend && <div className={styles['el-input-group__prepend']}>{prepend}</div>}
      <div className={clsx(styles['el-input__wrapper'], isFocus ? styles['is-focus'] : '')}>
        {/* prepend slot */}
        {prefix && (
          <span className={styles['el-input__prefix']}>
            <span className={styles['el-input__prefix-inner']}>{prefix}</span>
          </span>
        )}

        <input
          {...props}
          className={styles['el-input__inner']}
          type={type}
          value={inputValue}
          maxLength={typeof maxlength === 'string' ? parseInt(maxlength) : maxlength}
          minLength={typeof minlength === 'string' ? parseInt(minlength) : minlength}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
          onInput={(e) => handleInput(e)}
          onChange={(e) => handleChange(e)}
        />

        {/* suffix slot */}
        {suffix && (
          <span className={styles['el-input__suffix']}>
            <span className={styles['el-input__suffix-inner']}>{suffix}</span>
          </span>
        )}
      </div>
      {/* append slot */}
      {append && <div className={styles['el-input-group__append']}>{append}</div>}
    </div>
  )
}

export default ElInput
