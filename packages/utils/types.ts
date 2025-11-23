export const isArray = Array.isArray

export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isObject = (val: unknown): val is Record<string, any> =>
  val !== null && typeof val === 'object'

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isDate = (val: unknown): val is Date =>
  Object.prototype.toString.call(val) === '[object Date]'

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  isObject(val) && isFunction((val as any).then) && isFunction((val as any).catch)

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isPlainObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

export const isUndefined = (val: unknown): val is undefined => val === undefined

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isEmpty = (val: unknown): boolean =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && Object.keys(val).length === 0)

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}

export const isPropAbsent = (prop: unknown): prop is null | undefined =>
  prop === null || prop === undefined

export const isStringNumber = (val: unknown): val is string => {
  if (!isString(val)) return false
  return !Number.isNaN(Number(val))
}

export const isWindow = (val: unknown): val is Window =>
  typeof window !== 'undefined' && val === window
