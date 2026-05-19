import ElColorPickerPanel from '@ayay459547/element-plus-react/components/color-picker-panel/ElColorPickerPanel.tsx'
import type { ColorPickerPanelProps } from '@ayay459547/element-plus-react/components/color-picker-panel/types.ts'
import { useState } from 'react'

const ColorPickerPaneAlpha: React.FC = () => {
  const [color, setColor] = useState<ColorPickerPanelProps['value']>('rgba(19, 206, 102, 0.8)')

  return <ElColorPickerPanel value={color} onUpdateValue={setColor} showAlpha />
}

export default ColorPickerPaneAlpha
