import clsx from 'clsx'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import './ElRadio.scss'
import ElRadio from './ElRadio.tsx'
import ElRadioButton from './ElRadioButton.tsx'
import type { ElRadioGroupProps, RadioOptionProps } from './types'
import { RadioGroupContext } from './useRadioContext.ts'

const COMPONENT_NAME = 'ElRadioGroup'

const checkboxDefaultProps: Required<RadioOptionProps> = {
  label: 'label',
  value: 'value',
  disabled: 'disabled'
}

const ElRadioGroup: React.FC<ElRadioGroupProps> = forwardRef<HTMLDivElement, ElRadioGroupProps>(
  (
    {
      value,
      size = 'default',
      validateEvent,
      disabled = false,
      textColor = '#ffffff',
      fill = '#409eff',
      ariaLabel,
      name,
      id,
      options,
      props,
      type = 'radio',
      children,
      className,
      style,
      onChange,
      ...rest
    },
    ref
  ) => {
    const aliasProps = {
      ...checkboxDefaultProps,
      ...props
    }

    const getOptionProps = (option: Record<string, any>) => {
      const { label, value, disabled } = aliasProps
      return {
        label: option[label],
        value: option[value],
        disabled: option[disabled]
      }
    }

    const OptionComponent = type === 'button' ? ElRadioButton : ElRadio

    let showSlot: ReactNode | null = null
    if (children) {
      showSlot = children
    } else if (Array.isArray(options)) {
      showSlot = options.map((option) => {
        const optionProps = getOptionProps(option)
        return <OptionComponent key={optionProps.value} {...optionProps} />
      })
    }

    const changeEvent: ElRadioGroupProps['onChange'] = (e) => {
      onChange?.(e)
    }

    return (
      <RadioGroupContext.Provider
        value={{
          groupValue: value,
          size,
          validateEvent,
          disabled,
          textColor,
          fill,
          name,
          changeEvent
        }}
      >
        <div
          {...rest}
          ref={ref}
          role="radio-group"
          aria-label={ariaLabel || 'radio-group'}
          id={id}
          className={clsx('el-radio-group', className)}
          style={style}
        >
          {showSlot}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)

ElRadioGroup.displayName = COMPONENT_NAME

export default ElRadioGroup
