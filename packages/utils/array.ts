import { isArray } from './types'

export const unique = <T>(arr: T[]): T[] => [...new Set(arr)]

export const extractFirst = <T>(arr: T | T[]): T => {
  return isArray(arr) ? arr[0] : arr
}

type Many<T> = T | ReadonlyArray<T>

/** like `_.castArray`, except falsy value returns empty array. */
export const castArray = <T>(arr: Many<T>): T[] => {
  // `0` is allowed, but undefined/null/false return []
  if (!arr && arr !== 0) return []

  return isArray(arr) ? arr : [arr as T]
}

export const ensureArray = castArray
