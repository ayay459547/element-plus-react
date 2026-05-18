import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import { mergeRefs } from '@ayay459547/element-plus-react/utils/refs'
import clsx from 'clsx'
import type { KeyboardEvent } from 'react'
import { forwardRef, useEffect, useRef } from 'react'
import './ElSwitch.scss'
import type { ElSwitchProps } from './types'

const COMPONENT_NAME = 'ElSwitch'

const ElSwitch: React.FC<ElSwitchProps> = forwardRef<HTMLInputElement, ElSwitchProps>(
  (
    {
      value = false,
      disabled = false,
      loading = false,
      size = '',
      width = '',
      inlinePrompt = false,
      activeIcon,
      inactiveIcon,
      activeActionIcon,
      inactiveActionIcon,
      activeText = '',
      inactiveText = '',
      activeValue = true,
      inactiveValue = false,
      name = '',
      // validateEvent = true,
      tabIndex,
      ariaLabel,
      beforeChange,
      onChange,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const switchDisabled = disabled || loading

    const checked = value === activeValue

    // useImperativeHandle(ref, () => ({
    //   focus: () => {
    //     inputRef.current?.focus()
    //   },
    //   checked
    // }))

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.checked = checked
      }
    }, [checked])

    const emitChange = (value: ElSwitchProps['value']) => {
      onChange?.(value)
    }

    const handleChange = () => {
      const val = checked ? inactiveValue : activeValue

      emitChange(val)

      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.checked = val === activeValue
        }
      })
    }

    const switchValue = async () => {
      if (switchDisabled) return

      if (typeof beforeChange !== 'function') {
        handleChange()
        return
      }

      const result = beforeChange(checked ? inactiveValue : activeValue)

      if (typeof result === 'boolean') {
        if (result) {
          handleChange()
        }
        return
      }

      if (result instanceof Promise) {
        try {
          const shouldChange = await result

          if (shouldChange) {
            handleChange()
          }
        } catch (e) {
          console.warn('Switch beforeChange error:', e)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        switchValue()
      }
    }

    return (
      <div
        className={clsx(
          'el-switch',
          checked && 'is-checked',
          size && `el-switch--${size}`,
          switchDisabled && 'is-disabled',
          className
        )}
        style={style}
        onClick={(e) => {
          e.preventDefault()
          switchValue()
        }}
      >
        <input
          {...props}
          ref={mergeRefs(ref, inputRef)}
          type="checkbox"
          role="switch"
          aria-checked={checked}
          aria-disabled={switchDisabled}
          aria-label={ariaLabel}
          name={name}
          true-value={`${activeValue}`}
          false-value={`${inactiveValue}`}
          disabled={switchDisabled}
          tabIndex={typeof tabIndex !== 'undefined' ? Number(tabIndex) : tabIndex}
          onChange={handleChange}
          className="el-switch__input"
          onKeyDown={handleKeyDown}
        />

        {!inlinePrompt && (inactiveIcon || inactiveText) && (
          <span
            className={clsx(
              'labelLeftKls',
              'el-switch__label',
              'el-switch__label--left',
              !checked ? 'is-active' : ''
            )}
          >
            {inactiveIcon ? <ElIcon>{inactiveIcon}</ElIcon> : <span>{inactiveText}</span>}
          </span>
        )}

        <span
          className="el-switch__core"
          style={{
            width: width ? `${width}px` : undefined
          }}
        >
          {inlinePrompt && (
            <div className="el-switch__inner">
              {!checked ? (
                <div className="el-switch__inner-wrapper">
                  {inactiveIcon ? <ElIcon>{inactiveIcon}</ElIcon> : <span>{inactiveText}</span>}
                </div>
              ) : (
                <div className="el-switch__inner-wrapper">
                  {activeIcon ? <ElIcon>{activeIcon}</ElIcon> : <span>{activeText}</span>}
                </div>
              )}
            </div>
          )}

          <div className="el-switch__action">
            {loading ? (
              <span className="is-loading">Loading...</span>
            ) : checked ? (
              activeIcon
            ) : (
              inactiveIcon
            )}
          </div>
        </span>

        {!inlinePrompt && (activeIcon || activeText) && (
          <span
            className={clsx(
              'el-switch__label',
              'el-switch__label--right',
              checked ? 'is-active' : ''
            )}
          >
            {activeIcon ? <ElIcon>{activeIcon}</ElIcon> : <span>{activeText}</span>}
          </span>
        )}
      </div>
    )
  }
)

ElSwitch.displayName = COMPONENT_NAME

export default ElSwitch
