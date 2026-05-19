import type { FC } from 'react'
import { usePredefine, usePredefineDOM, type PredefineProps } from '../hooks/use-predefine'

const Predefine: FC<PredefineProps> = (props) => {
  const { rgbaColors, handleSelect } = usePredefine(props)
  const { rootKls, colorsKls, colorSelectorKls, ariaLabel } = usePredefineDOM()

  return (
    <div className={rootKls}>
      <div className={colorsKls}>
        {rgbaColors.map((item, index) => (
          <button
            key={index}
            type="button"
            disabled={props.disabled}
            aria-label={ariaLabel(item.value)}
            className={colorSelectorKls(item)}
            onClick={() => handleSelect(index)}
          >
            <div style={{ backgroundColor: item.displayValue }}></div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Predefine
