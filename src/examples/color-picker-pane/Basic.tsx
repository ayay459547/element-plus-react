import ElColorPickerPanel from '@ayay459547/element-plus-react/components/color-picker-panel/ElColorPickerPanel.tsx'
import type { ColorPickerPanelProps } from '@ayay459547/element-plus-react/components/color-picker-panel/types.ts'
import { useState } from 'react'

const ColorPickerPaneBasic: React.FC = () => {
  const [color, setColor] = useState<ColorPickerPanelProps['value']>('#409eff')

  return <ElColorPickerPanel value={color} onUpdateValue={setColor} />
}

export default ColorPickerPaneBasic
