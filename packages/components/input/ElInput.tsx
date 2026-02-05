import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
// import { useFocusController } from '@ayay459547/element-plus-react/hooks/useFocusController'
import CircleClose from '@ayay459547/element-plus-react/icons-svg/circle-close.svg?react'
import IconHide from '@ayay459547/element-plus-react/icons-svg/hide.svg?react'
import IconView from '@ayay459547/element-plus-react/icons-svg/view.svg?react'
import { mergeRefs } from '@ayay459547/element-plus-react/utils/refs'
import clsx from 'clsx'
import type { ChangeEvent, InputEvent } from 'react'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'
import styles from './ElInput.module.scss'
import type { ElInputProps } from './types'
import { useTextareaAutosize } from './useTextareaAutosize'
import { looseToNumber } from './utils'

const COMPONENT_NAME = 'ElInput'

const ElInput: React.FC<ElInputProps> = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  ElInputProps
>(
  (
    {
      type = 'text',
      value,
      modelModifiers,
      maxlength,
      minlength,
      showWordLimit = false,
      wordLimitPosition = 'inside',
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
      prefixIcon,
      suffix,
      suffixIcon,
      rows = 2,
      autosize = false,
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
    const inputId = useId()

    const [isFocused, setIsFocused] = useState(false)

    const inputValue = value === undefined || value === null ? '' : String(value)

    const [hovering, setHovering] = useState(false)
    const handleMouseEnter = () => setHovering(true)
    const handleMouseLeave = () => setHovering(false)

    // const inputDisabled = useFormDisabled()
    const inputDisabled = disabled

    const nativeInputValue = formatter ? formatter(inputValue) : inputValue

    const showClear =
      clearable && !inputDisabled && !readonly && !!inputValue && (isFocused || hovering)

    const showPwdVisible = showPassword && !inputDisabled && !!inputValue

    const isWordLimitVisible =
      showWordLimit &&
      !!maxlength &&
      (type === 'text' || type === 'textarea') &&
      !inputDisabled &&
      !readonly &&
      !showPassword

    const textLength = typeof inputValue === 'string' ? inputValue.length : 0

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
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    useTextareaAutosize(textareaRef, inputValue, autosize)

    const [passwordVisible, setPasswordVisible] = useState(false)
    const handlePasswordVisible = () => setPasswordVisible((prev) => !prev)

    const focus = () => inputRef.current?.focus()

    // const blur = () => inputRef.current?.blur()

    const formatValue = (value: string) => {
      const { trim, number } = modelModifiers ?? {}
      if (trim) {
        value = value.trim()
      }
      if (number) {
        value = `${looseToNumber(value)}`
      }
      if (formatter && parser) {
        value = parser(value)
      }
      return value
    }
    // const hasModelModifiers = !!Object.keys(modelModifiers ?? {}).length

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

      if (typeof onChange === 'function') {
        onChange(e)
      }
    }

    const suffixVisible =
      !!suffix || !!suffixIcon || showClear || showPassword || isWordLimitVisible
    // (!!validateState && needStatusIcon)

    const clear = () => {
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
        const target = inputRef.current

        handleInput?.({
          target
        } as unknown as InputEvent<HTMLInputElement>)

        handleChange?.({
          target
        } as ChangeEvent<HTMLInputElement>)

        focus()
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
          type !== 'textarea'
            ? `el-input ${styles['el-input']}`
            : `el-textarea ${styles['el-textarea']}`,
          inputDisabled ? styles['is-disabled'] : '',
          size ? styles[`el-input--${size}`] : '',
          prepend ? styles['el-input-group--prepend'] : '',
          append ? styles['el-input-group--append'] : '',
          className
        )}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* input */}
        {type !== 'textarea' && (
          <>
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
              {(prefix || prefixIcon) && (
                <span className={clsx('el-input__prefix', styles['el-input__prefix'])}>
                  <span
                    className={clsx('el-input__prefix-inner', styles['el-input__prefix-inner'])}
                  >
                    {prefix}
                    {prefixIcon && (
                      <ElIcon className={clsx('el-input__icon', styles['el-input__icon'])}>
                        {prefixIcon}
                      </ElIcon>
                    )}
                  </span>
                </span>
              )}

              <input
                ref={mergeRefs(ref, inputRef)}
                id={inputId}
                {...props}
                className={clsx('el-input__inner', styles['el-input__inner'])}
                type={showPassword ? (passwordVisible ? 'text' : 'password') : type}
                input-value={inputValue}
                value={nativeInputValue}
                maxLength={typeof maxlength === 'string' ? parseInt(maxlength) : maxlength}
                minLength={typeof minlength === 'string' ? parseInt(minlength) : minlength}
                placeholder={placeholder}
                disabled={inputDisabled}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                onInput={(e) => handleInput(e)}
                onChange={(e) => handleChange(e)}
              />

              {/* suffix slot */}
              {suffixVisible && (
                <span className={clsx('el-input__suffix', styles['el-input__suffix'])}>
                  <span
                    className={clsx('el-input__suffix-inner', styles['el-input__suffix-inner'])}
                  >
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

                    {showPwdVisible && (
                      <ElIcon
                        className={clsx(
                          'el-input__icon',
                          styles['el-input__icon'],
                          'el-input__password',
                          styles['el-input__password']
                        )}
                        onClick={handlePasswordVisible}
                      >
                        {passwordVisible ? <IconView /> : <IconHide />}
                      </ElIcon>
                    )}

                    {isWordLimitVisible && (
                      <span
                        className={clsx(
                          'el-input__count',
                          styles['el-input__count'],
                          wordLimitPosition === 'outside' ? styles['is-outside'] : ''
                        )}
                      >
                        <span
                          className={clsx('el-input__count-inner', styles['el-input__count-inner'])}
                        >
                          {textLength} / {maxlength}
                        </span>
                      </span>
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
          </>
        )}
        {/* textarea  */}
        {type === 'textarea' && (
          <>
            <textarea
              ref={mergeRefs(ref, textareaRef)}
              id={inputId}
              {...props}
              className={clsx('el-textarea__inner', styles['el-textarea__inner'])}
              rows={autosize ? 1 : rows}
              input-value={inputValue}
              value={nativeInputValue}
              maxLength={typeof maxlength === 'string' ? parseInt(maxlength) : maxlength}
              minLength={typeof minlength === 'string' ? parseInt(minlength) : minlength}
              placeholder={placeholder}
              disabled={inputDisabled}
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onInput={(e) => handleInput(e)}
              onChange={(e) => handleChange(e)}
            />
            {isWordLimitVisible && (
              <span
                // style={countStyle}
                className={clsx(
                  'el-input__count',
                  styles['el-input__count'],
                  wordLimitPosition === 'outside' ? styles['is-outside'] : ''
                )}
              >
                {textLength} / {maxlength}
              </span>
            )}
          </>
        )}
      </div>
    )
  }
)

ElInput.displayName = COMPONENT_NAME

export default ElInput
