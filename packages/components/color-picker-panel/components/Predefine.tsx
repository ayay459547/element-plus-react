import clsx from 'clsx'
import type { FC } from 'react'

interface PredefineProps {
  colors: string[]
  onSelect?: (color: string) => void
  activeColor?: string | null
}

const Predefine: FC<PredefineProps> = ({ colors, onSelect, activeColor }) => {
  return (
    <div className="el-color-predefine">
      <div className="el-color-predefine__colors">
        {colors.map((item, index) => (
          <div
            key={index}
            className={clsx('el-color-predefine__color-selector', 'is-alpha', {
              selected: item === activeColor
            })}
            onClick={() => onSelect?.(item)}
          >
            <div style={{ backgroundColor: item }}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Predefine
