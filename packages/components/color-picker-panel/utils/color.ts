import tinycolor from 'tinycolor2'

export class Color {
  private _hue = 0
  private _saturation = 100
  private _value = 100
  private _alpha = 100
  private _format = 'hex'
  private _onChange?: (color: Color) => void

  constructor(options: any = {}) {
    this._onChange = options.onChange
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option)) {
        ;(this as any)[option] = options[option]
      }
    }
  }

  get hue() {
    return this._hue
  }

  set hue(val: number) {
    this._hue = val
    this.doOnChange()
  }

  get saturation() {
    return this._saturation
  }

  set saturation(val: number) {
    this._saturation = val
    this.doOnChange()
  }

  get value() {
    return this._value
  }

  set value(val: number) {
    this._value = val
    this.doOnChange()
  }

  get alpha() {
    return this._alpha
  }

  set alpha(val: number) {
    this._alpha = val
    this.doOnChange()
  }

  get format() {
    return this._format
  }

  set format(val: string) {
    this._format = val
  }

  set(prop: string | any, value?: number) {
    if (arguments.length === 1 && typeof prop === 'object') {
      for (const p in prop) {
        if (Object.prototype.hasOwnProperty.call(prop, p)) {
          this.set(p, prop[p])
        }
      }
      return
    }
    ;(this as any)[`_${prop}`] = value
    this.doOnChange()
  }

  get(prop: string) {
    return (this as any)[`_${prop}`]
  }

  fromString(value: string | null) {
    if (!value) {
      this._hue = 0
      this._saturation = 100
      this._value = 100
      this._alpha = 100
      this.doOnChange()
      return
    }

    const color = tinycolor(value)
    if (color.isValid()) {
      const { h, s, v, a } = color.toHsv()
      this._hue = h
      this._saturation = s * 100
      this._value = v * 100
      this._alpha = a * 100
      this._format = color.getFormat() || 'hex'
      this.doOnChange()
    }
  }

  private doOnChange() {
    this._onChange?.(this)
  }

  toString(format?: string) {
    const color = tinycolor({
      h: this._hue,
      s: this._saturation / 100,
      v: this._value / 100,
      a: this._alpha / 100
    })
    const f = format || this._format
    if (f === 'hsl') return color.toHslString()
    if (f === 'hsv') return color.toHsvString()
    if (f === 'rgb') return color.toRgbString()
    if (f === 'hex') return color.toHexString()
    return color.toRgbString()
  }
}
