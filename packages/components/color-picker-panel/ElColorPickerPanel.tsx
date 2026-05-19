import clsx from 'clsx'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import ElInput from '../input/ElInput.tsx'
import AlphaSlider from './components/AlphaSlider.tsx'
import HueSlider from './components/HueSlider.tsx'
import Predefine from './components/Predefine.tsx'
import SvPanel from './components/SvPanel.tsx'
import './ElColorPickerPanel.scss'
import type { ColorPickerPanelProps, ElColorPickerPanelInstance } from './types'
import { Color } from './utils/color.ts'

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

    const [, forceUpdate] = useState({})
    const color = useMemo(() => {
      return new Color({
        onChange: () => forceUpdate({})
      })
    }, [])

    const [userInput, setUserInput] = useState('')
    const [internalValue, setInternalValue] = useState<string | null>(null)

    // Sync from value prop
    useEffect(() => {
      if (value !== internalValue) {
        color.fromString(value || '')
        setInternalValue(value || null)
      }
    }, [value, internalValue, color])

    const onChange = useCallback(() => {
      const val = color.toString(colorFormat)
      setInternalValue(val)
      onUpdateValue?.(val)
      onActiveChange?.(val)
    }, [color, colorFormat, onUpdateValue, onActiveChange])

    const onSelectPredefine = useCallback(
      (preValue: string) => {
        color.fromString(preValue)
        onChange()
      },
      [color, onChange]
    )

    useImperativeHandle(ref, () => ({
      color
    }))

    return (
      <div
        className={clsx('el-color-picker-panel', className, {
          'is-alpha': showAlpha,
          'is-border': border
        })}
        style={style}
      >
        <div className="el-color-picker-panel__wrapper">
          <HueSlider color={color} vertical onChange={onChange} />
          <SvPanel color={color} onChange={onChange} />
        </div>
        {showAlpha && <AlphaSlider color={color} onChange={onChange} />}
        {predefine && (
          <Predefine colors={predefine} onSelect={onSelectPredefine} activeColor={internalValue} />
        )}
        <div className="el-color-picker-panel__footer">
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
              if (e.key === 'Enter' && userInput) {
                color.fromString(userInput)
                onChange()
                setUserInput('')
              }
            }}
          />
        </div>
      </div>
    )
  }
)

ElColorPickerPanel.displayName = 'ElColorPickerPanel'

export default ElColorPickerPanel
