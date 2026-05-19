import ElColorPickerPanel from '@ayay459547/element-plus-react/components/color-picker-panel/ElColorPickerPanel.tsx'
// import ElDivider from '@ayay459547/element-plus-react/components/divider/ElDivider.tsx'
import type { ColorPickerPanelProps } from '@ayay459547/element-plus-react/components/color-picker-panel/types.ts'
import { useState } from 'react'

const ColorPickerPaneBorder: React.FC = () => {
  const [color, setColor] = useState<ColorPickerPanelProps['value']>('#ff6900')

  return (
    <div>
      <div className="text-center">No border:</div>
      {/* <ElDivider /> */}
      <div
        className="el-divider el-divider--horizontal"
        style={{
          border: '1px solid #dcdfe6'
        }}
      ></div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 border">
        <div className="p-5">
          <ElColorPickerPanel value={color} onUpdateValue={setColor} border={false} />
        </div>
        {/* <ElDivider
          class="h-auto"
          direction="horizontal"
        /> */}
        <div
          className="el-divider el-divider--horizontal"
          style={{
            border: '1px solid #dcdfe6'
          }}
        ></div>

        <ElColorPickerPanel value={color} onUpdateValue={setColor} border={false} />
      </div>
    </div>
  )
}

export default ColorPickerPaneBorder
