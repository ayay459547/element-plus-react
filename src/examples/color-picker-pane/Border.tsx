import ElColorPickerPanel from '@ayay459547/element-plus-react/components/color-picker-panel/ElColorPickerPanel.tsx'
// import ElDivider from '@ayay459547/element-plus-react/components/divider/ElDivider.tsx'
import type { ColorPickerPanelProps } from '@ayay459547/element-plus-react/components/color-picker-panel/types.ts'
import { useState } from 'react'

const ColorPickerPaneBorder: React.FC = () => {
  const [color, setColor] = useState<ColorPickerPanelProps['value']>('#ff6900')

  return (
    <div className="flex flex-col flex-wrap justify-center gap-8 border py-4">
      <ElColorPickerPanel value={color} onUpdateValue={setColor} border={false} />

      <ElColorPickerPanel value={color} onUpdateValue={setColor} border />
    </div>
  )
}

export default ColorPickerPaneBorder
