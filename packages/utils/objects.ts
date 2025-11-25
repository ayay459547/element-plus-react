// import { get, set } from 'lodash-unified'

// import type { Entries } from 'type-fest'
type MapKey<BaseType> = BaseType extends Map<infer KeyType, unknown> ? KeyType : never
type MapValue<BaseType> = BaseType extends Map<unknown, infer ValueType> ? ValueType : never

type ArrayEntry<BaseType extends readonly unknown[]> = [number, BaseType[number]]
type MapEntry<BaseType> = [MapKey<BaseType>, MapValue<BaseType>]
type ObjectEntry<BaseType> = [keyof BaseType, BaseType[keyof BaseType]]
type SetEntry<BaseType> = BaseType extends Set<infer ItemType> ? [ItemType, ItemType] : never

type ArrayEntries<BaseType extends readonly unknown[]> = Array<ArrayEntry<BaseType>>
type MapEntries<BaseType> = Array<MapEntry<BaseType>>
type ObjectEntries<BaseType> = Array<ObjectEntry<BaseType>>
type SetEntries<BaseType extends Set<unknown>> = Array<SetEntry<BaseType>>
/*
 * @category Object
 * @category Map
 * @category Set
 * @category Array
 */
export type Entries<BaseType> =
  BaseType extends Map<unknown, unknown>
    ? MapEntries<BaseType>
    : BaseType extends Set<unknown>
      ? SetEntries<BaseType>
      : BaseType extends readonly unknown[]
        ? ArrayEntries<BaseType>
        : BaseType extends object
          ? ObjectEntries<BaseType>
          : never

// import type { Arrayable } from '.'

export const keysOf = <T extends object>(arr: T) => Object.keys(arr) as Array<keyof T>

export const entriesOf = <T extends object>(arr: T) => Object.entries(arr) as Entries<T>

// export { hasOwn } from '@vue/shared'

// export const getProp = <T = any>(
//   obj: Record<string, any>,
//   path: Arrayable<string>,
//   defaultValue?: any
// ): { value: T } => {
//   return {
//     get value() {
//       return get(obj, path, defaultValue)
//     },
//     set value(val: any) {
//       set(obj, path, val)
//     },
//   }
// }
