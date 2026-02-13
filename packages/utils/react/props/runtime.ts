export const epPropKey = '__epPropKey'

export type EpPropInput<T = any> = {
  type?: any
  values?: readonly T[]
  required?: boolean
  default?: T
  validator?: (val: unknown) => boolean
}

export type EpPropFinalized<T = any> = {
  default?: T
  required?: boolean
  validator?: (val: unknown) => boolean
  [epPropKey]: true
}

export const buildProp = <T>(prop: EpPropInput<T>, key?: string): EpPropFinalized<T> => {
  if (!prop || typeof prop !== 'object') return prop as any

  const { values, validator, default: defaultValue, required } = prop

  const _validator =
    values || validator
      ? (val: unknown) => {
          let valid = false
          let allowedValues: unknown[] = []

          if (values) {
            allowedValues = [...values]
            if ('default' in prop) {
              allowedValues.push(defaultValue)
            }
            valid ||= allowedValues.includes(val)
          }

          if (validator) valid ||= validator(val)

          return valid
        }
      : undefined

  return {
    required,
    default: defaultValue,
    validator: _validator,
    [epPropKey]: true
  }
}
