import type { epPropKey } from './runtime'
import type { IfNever, UnknownToNever } from './util'

/**
 * Merge Type / Value / Validator
 */
export type EpPropMergeType<Type, Value, Validator> =
  | IfNever<UnknownToNever<Value>, Type, never>
  | UnknownToNever<Value>
  | UnknownToNever<Validator>

/**
 * Final output (React version)
 */
export type EpProp<Type, Default, Required extends boolean> = {
  readonly required: Required extends true ? true : false
  readonly validator?: (val: unknown) => boolean
  readonly default?: Default
  [epPropKey]: true
}

/**
 * detect EpProp
 */
export type IfEpProp<T, Y, N> = T extends { [epPropKey]: true } ? Y : N
