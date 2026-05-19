import { type FC } from 'react'

interface PredefineProps {
  colors: string[]
  onSelect?: (color: string) => void
}

const Predefine: FC<PredefineProps> = ({ colors, onSelect }) => {
  return (
    <div className="el-color-predefine">
      <div className="el-color-predefine__colors">
        {colors.map((item, index) => (
          <div
            key={index}
            className="el-color-predefine__color-selector"
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
