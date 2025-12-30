import clsx from 'clsx'
import type { ElementType, ReactNode } from 'react'
import styles from './ElCheckbox.module.scss'
import ElCheckbox from './ElCheckbox.tsx'
import ElCheckboxButton from './ElCheckboxButton.tsx'
import type { CheckboxOptionProps, ElCheckboxGroupProps } from './types'
import { CheckboxGroupContext } from './useCheckboxGroup'

const checkboxDefaultProps: Required<CheckboxOptionProps> = {
  label: 'label',
  value: 'value',
  disabled: 'disabled'
}

const ElCheckboxGroup = <T extends ElementType = 'div'>({
  value,
  size,
  disabled = false,
  min,
  max,
  ariaLabel,
  textColor = '#ffffff',
  fill = '#409eff',
  validateEvent,
  options,
  props,
  type = 'checkbox',
  tag,
  children,
  className,
  style,
  onChange,
  ...rest
}: ElCheckboxGroupProps<T>) => {
  const Tag = tag || 'div'

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

  const OptionComponent = type === 'button' ? ElCheckboxButton : ElCheckbox

  let showSlot: ReactNode | null = null
  if (children) {
    showSlot = children
  } else if (Array.isArray(options)) {
    showSlot = options.map((option) => {
      const optionProps = getOptionProps(option)
      return <OptionComponent key={optionProps.value} {...optionProps} />
    })
  }

  const changeEvent = async (newValue: ElCheckboxGroupProps['value']) => {
    onChange?.(newValue)
  }

  return (
    <CheckboxGroupContext.Provider
      value={{
        groupValue: value,
        size,
        min,
        max,
        validateEvent,
        disabled,
        textColor,
        fill,
        changeEvent
      }}
    >
      <Tag
        {...rest}
        role="group"
        aria-label={ariaLabel || 'checkbox-group'}
        className={clsx('el-checkbox-group', styles['el-checkbox-group'], className)}
        style={style}
      >
        {showSlot}
      </Tag>
    </CheckboxGroupContext.Provider>
  )
}

export default ElCheckboxGroup
