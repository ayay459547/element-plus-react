import { useMemo } from 'react'
import { useNamespace } from '../../../hooks/useNamespace'
import { Color } from '../utils/color'

export interface PredefineProps {
  colors: string[]
  color: Color
  activeColor: string | null
  disabled?: boolean
  onSelect?: (color: string) => void
}

export const usePredefine = (props: PredefineProps) => {
  const rgbaColors = useMemo(() => {
    return props.colors.map((value) => {
      const c = new Color()
      c.fromString(value)
      return {
        value,
        displayValue: c.toString(),
        selected: c.toString() === props.activeColor
      }
    })
  }, [props.colors, props.activeColor])

  const handleSelect = (index: number) => {
    props.onSelect?.(props.colors[index])
  }

  return {
    rgbaColors,
    handleSelect
  }
}

export const usePredefineDOM = () => {
  const ns = useNamespace('color-predefine')

  const rootKls = ns.b()
  const colorsKls = ns.e('colors')

  const colorSelectorKls = (item: { selected: boolean }) => {
    return [ns.e('color-selector'), ns.is('alpha'), ns.is('selected', item.selected)].join(' ')
  }

  const ariaLabel = (value: string) => {
    // In a real implementation, this would use t() from useLocale
    return `Color: ${value}`
  }

  return {
    rootKls,
    colorsKls,
    colorSelectorKls,
    ariaLabel
  }
}
