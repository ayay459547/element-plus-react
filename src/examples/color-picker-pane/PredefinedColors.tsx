import ElColorPickerPanel from '@ayay459547/element-plus-react/components/color-picker-panel/ElColorPickerPanel.tsx'
import type { ColorPickerPanelProps } from '@ayay459547/element-plus-react/components/color-picker-panel/types.ts'
import { useState } from 'react'

const PredefinedColors: React.FC = () => {
  const [color, setColor] = useState<ColorPickerPanelProps['value']>('rgba(255, 69, 0, 0.68)')

  const predefineColors = [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c715857'
  ]

  return (
    <ElColorPickerPanel
      value={color}
      onUpdateValue={setColor}
      showAlpha
      predefine={predefineColors}
    />
  )
}

export default PredefinedColors
