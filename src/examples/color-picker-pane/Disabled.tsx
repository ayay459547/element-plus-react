import ElColorPickerPanel from '@ayay459547/element-plus-react/components/color-picker-panel/ElColorPickerPanel.tsx'
import type { ColorPickerPanelProps } from '@ayay459547/element-plus-react/components/color-picker-panel/types.ts'
import { useState } from 'react'

const ColorPickerPaneDisabled: React.FC = () => {
  const [color, setColor] = useState<ColorPickerPanelProps['value']>('#ff6900')
  const predefineColors = [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c7158'
  ]

  return (
    <ElColorPickerPanel
      value={color}
      onUpdateValue={setColor}
      showAlpha
      disabled
      predefine={predefineColors}
    />
  )
}

export default ColorPickerPaneDisabled
