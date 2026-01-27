import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
// import { useFocusController } from '@ayay459547/element-plus-react/hooks/useFocusController'
import CircleClose from '@ayay459547/element-plus-react/icons-svg/circle-close.svg?react'
import { mergeRefs } from '@ayay459547/element-plus-react/utils/refs'
import clsx from 'clsx'
import type { ChangeEvent } from 'react'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'
import styles from './ElInput.module.scss'
import type { ElInputProps } from './types'

const COMPONENT_NAME = 'ElInput'

const ElInput = forwardRef<HTMLInputElement, ElInputProps>(
  (
    {
      type = 'text',
      value,
      // modelModifier,
      maxlength,
      minlength,
      showWordLimit = false,
      // wordLimitPosition = 'inside',
      placeholder,
      clearable = false,
      clearIcon = <CircleClose />,
      formatter,
      parser,
      showPassword = false,
      disabled = false,
      size,
      readonly = false,
      prefix,
      // prefixIcon,
      suffix,
      suffixIcon,
      prepend,
      append,
      className,
      style,
      onFocus,
      onBlur,
      onInput,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    const [inputValue, setInputValue] = useState(
      value === undefined || value === null ? '' : String(value)
    )

    const [hovering, setHovering] = useState(false)
    const handleMouseEnter = () => {
      setHovering(true)
    }
    const handleMouseLeave = () => {
      setHovering(false)
    }

    // const inputDisabled = useFormDisabled()
    const inputDisabled = disabled

    const [nativeInputValue, setNativeInputValue] = useState(
      formatter ? formatter(inputValue) : inputValue
    )

    const showClear =
      clearable && !inputDisabled && !readonly && !!inputValue && (isFocused || hovering)

    const showPwdVisible = showPassword && !inputDisabled && !!inputValue

    const isWordLimitVisible = () =>
      showWordLimit &&
      !!maxlength &&
      (type === 'text' || type === 'textarea') &&
      !inputDisabled &&
      !readonly &&
      !showPassword

    const handleFocus: ElInputProps['onFocus'] = (e) => {
      setIsFocused(true)
      if (typeof onFocus === 'function') {
        onFocus(e)
      }
    }

    const handleBlur: ElInputProps['onBlur'] = (e) => {
      setIsFocused(false)
      if (typeof onBlur === 'function') {
        onBlur(e)
      }
    }

    const inputRef = useRef<HTMLInputElement | null>(null)
    // const { wrapperRef, isFocused } = useFocusController<HTMLInputElement, HTMLDivElement>(
    //   inputRef,
    //   {
    //     afterFocus: (e) => handleFocus(e),
    //     afterBlur: (e) => handleBlur(e)
    //   }
    // )

    const formatValue = (value: string) => {
      // const { trim, number } = modelModifiers
      // if (trim) {
      //   value = value.trim()
      // }
      // if (number) {
      //   value = `${looseToNumber(value)}`
      // }
      if (formatter && parser) {
        value = parser(value)
      }
      return value
    }
    // const hasModelModifiers = !!Object.keys(modelModifiers).length

    const handleInput: ElInputProps['onInput'] = (e) => {
      if (typeof onInput === 'function') {
        onInput(e)
      }
    }

    const handleChange: ElInputProps['onChange'] = (e) => {
      let { value } = e.target

      if (e.target) {
        value = formatValue(value)
        e.target.value = value
      }

      setInputValue(value)
      if (typeof onChange === 'function') {
        onChange(e)
      }

      if (formatter) {
        value = formatter(value)
        setNativeInputValue(value)
      }
    }

    const suffixVisible =
      !!suffix || !!suffixIcon || showClear || showPassword || isWordLimitVisible
    // (!!validateState && needStatusIcon)

    const clear = () => {
      setInputValue('')

      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
        const target = inputRef.current

        handleInput?.({
          target
        } as ChangeEvent<HTMLInputElement>)

        handleChange?.({
          target
        } as ChangeEvent<HTMLInputElement>)

        inputRef.current?.focus()
      }
    }

    useEffect(() => {
      if (!formatter && parser) {
        console.warn(COMPONENT_NAME, 'If you set the parser, you also need to set the formatter.')
      }
    }, [formatter, parser])

    return (
      <div
        className={clsx(
          'el-input',
          styles['el-input'],
          inputDisabled ? styles['is-disabled'] : '',
          size ? styles[`el-input--${size}`] : '',
          className
        )}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* prepend slot */}
        {prepend && (
          <div className={clsx('el-input-group__prepend', styles['el-input-group__prepend'])}>
            {prepend}
          </div>
        )}
        <div
          className={clsx(
            'el-input__wrapper',
            styles['el-input__wrapper'],
            isFocused ? styles['is-focus'] : ''
          )}
        >
          {/* prepend slot */}
          {prefix && (
            <span className={clsx('el-input__prefix', styles['el-input__prefix'])}>
              <span className={clsx('el-input__prefix-inner', styles['el-input__prefix-inner'])}>
                {prefix}
              </span>
            </span>
          )}

          <input
            ref={mergeRefs(ref, inputRef)}
            id={useId()}
            {...props}
            className={clsx('el-input__inner', styles['el-input__inner'])}
            type={type}
            input-value={inputValue}
            value={nativeInputValue}
            maxLength={typeof maxlength === 'string' ? parseInt(maxlength) : maxlength}
            minLength={typeof minlength === 'string' ? parseInt(minlength) : minlength}
            placeholder={placeholder}
            disabled={inputDisabled}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)}
            onInput={(e) => handleInput(e as any)}
            onChange={(e) => handleChange(e)}
          />

          {/* suffix slot */}
          {suffixVisible && (
            <span className={clsx('el-input__suffix', styles['el-input__suffix'])}>
              <span className={clsx('el-input__suffix-inner', styles['el-input__suffix-inner'])}>
                {(!showClear || !showPwdVisible || !isWordLimitVisible) && suffix}
                {(!showClear || !showPwdVisible || !isWordLimitVisible) && suffixIcon && (
                  <ElIcon className={clsx('el-input__icon', styles['el-input__icon'])}>
                    {suffixIcon}
                  </ElIcon>
                )}

                {showClear && (
                  <ElIcon
                    className={clsx(
                      'el-input__icon',
                      styles['el-input__icon'],
                      'el-input__clear',
                      styles['el-input__clear']
                    )}
                    onClick={clear}
                  >
                    {clearIcon}
                  </ElIcon>
                )}
              </span>
            </span>
          )}
        </div>
        {/* append slot */}
        {append && (
          <div className={clsx('el-input-group__append', styles['el-input-group__append'])}>
            {append}
          </div>
        )}
      </div>
    )
  }
)

ElInput.displayName = COMPONENT_NAME

export default ElInput
