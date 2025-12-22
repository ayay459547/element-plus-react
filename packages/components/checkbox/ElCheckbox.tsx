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
  checked = false,
  children,
  className,
  style
}) => {
  let showLabel: ReactNode | string | null = null
  if (children) {
    showLabel = children
  } else if (label) {
    showLabel = `${label}`
  }

  const [checkboxValue, setCheckboxValue] = useState(value)

  // const init = useCallback(() => {
  //   const true_value = trueValue ?? checked
  //   const false_value = falseValue ?? checked
  //   setCheckboxValue(checked ? true_value : false_value)
  // }, [])

  // useEffect(() => {
  //   init()
  // }, [init])

  return (
    <label className={clsx('el-checkbox', styles['el-checkbox'], className)} style={{ ...style }}>
      <span className={clsx('el-checkbox__input', styles['el-checkbox__input'])}>
        <input
          className={clsx('el-checkbox__original', styles['el-checkbox__original'])}
          type="checkbox"
          value={`${checkboxValue ?? ''}`}
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
