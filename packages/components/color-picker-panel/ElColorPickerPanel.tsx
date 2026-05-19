import clsx from 'clsx'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
// import ElButton from '../button/ElButton.tsx'
import ElInput from '../input/ElInput.tsx'
import './ElColorPickerPanel.scss'
import AlphaSlider from './src/components/AlphaSlider.tsx'
import HueSlider from './src/components/HueSlider.tsx'
import Predefine from './src/components/Predefine.tsx'
import SvPanel from './src/components/SvPanel.tsx'
import { Color } from './src/utils/color.ts'
import type { ColorPickerPanelProps, ElColorPickerPanelInstance } from './types'

const ElColorPickerPanel = forwardRef<ElColorPickerPanelInstance, ColorPickerPanelProps>(
  (props, ref) => {
    const {
      value,
      border = true,
      showAlpha = false,
      colorFormat,
      predefine,
      className,
      style,
      onUpdateValue,
      onActiveChange
    } = props

    const color = useMemo(() => new Color(), [])
    const [userInput, setUserInput] = useState('')
    const [internalValue, setInternalValue] = useState<string | null>(value || null)

    // Sync from value
    useEffect(() => {
      if (value !== internalValue) {
        color.fromString(value || '')
        setInternalValue(value || null)
      }
    }, [value])

    const handleConfirm = useCallback(() => {
      const val = color.toString(colorFormat)
      setInternalValue(val)
      onUpdateValue?.(val)
    }, [color, colorFormat, onUpdateValue])

    // const handleClear = useCallback(() => {
    //   setInternalValue(null)
    //   onUpdateValue?.(null)
    // }, [onUpdateValue])

    const onChange = useCallback(() => {
      const val = color.toString(colorFormat)
      setInternalValue(val)
      onActiveChange?.(val)
    }, [color, colorFormat, onActiveChange])

    const onSelectPredefine = useCallback(
      (value: string) => {
        color.fromString(value)
        onChange()
      },
      [color, onChange]
    )

    useImperativeHandle(ref, () => ({
      color
    }))

    return (
      <div
        className={clsx(
          'el-color-picker-panel',
          border && 'is-border',
          showAlpha && 'is-alpha',
          className
        )}
        style={style}
      >
        <div className="el-color-picker-panel__wrapper">
          <HueSlider color={color} vertical onChange={onChange} />
          <SvPanel color={color} onChange={onChange} />
        </div>
        {showAlpha && <AlphaSlider color={color} onChange={onChange} />}
        {predefine && <Predefine colors={predefine} onSelect={onSelectPredefine} />}
        <div className="el-color-dropdown__btns">
          <span className="el-color-dropdown__value">
            <ElInput
              size="small"
              value={userInput || internalValue || ''}
              onInput={(v) => setUserInput(v.currentTarget.value)}
              onBlur={() => {
                if (userInput) {
                  color.fromString(userInput)
                  onChange()
                  setUserInput('')
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleConfirm()
                }
              }}
            />
          </span>
          {/* <ElButton size="small" text className="el-color-dropdown__link-btn" onClick={handleClear}>
            清空
          </ElButton>
          <ElButton plain size="small" className="el-color-dropdown__btn" onClick={handleConfirm}>
            確定
          </ElButton> */}
        </div>
      </div>
    )
  }
)

ElColorPickerPanel.displayName = 'ElColorPickerPanel'

export default ElColorPickerPanel
