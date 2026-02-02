import { createContext, useContext, useMemo } from 'react'

export const defaultNamespace = 'el'
const statePrefix = 'is-'

const _bem = (
  namespace: string,
  block: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) cls += `-${blockSuffix}`
  if (element) cls += `__${element}`
  if (modifier) cls += `--${modifier}`
  return cls
}

export const NamespaceContext = createContext<string | undefined>(undefined)

export const useGetDerivedNamespace = (namespaceOverride?: string) => {
  const contextNamespace = useContext(NamespaceContext)

  return useMemo(
    () => namespaceOverride || contextNamespace || defaultNamespace,
    [namespaceOverride, contextNamespace]
  )
}

export const useNamespace = (block: string, namespaceOverride?: string) => {
  const namespace = useGetDerivedNamespace(namespaceOverride)

  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix)

  const e = (element?: string) => (element ? _bem(namespace, block, '', element) : '')

  const m = (modifier?: string) => (modifier ? _bem(namespace, block, '', '', modifier) : '')

  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element ? _bem(namespace, block, blockSuffix, element) : ''

  const em = (element?: string, modifier?: string) =>
    element && modifier ? _bem(namespace, block, '', element, modifier) : ''

  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : ''

  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : ''

  const is = (name: string, state: boolean | undefined = true) =>
    name && state ? `${statePrefix}${name}` : ''

  // const cssVar = (object: Record<string, string>) => {
  //   const styles: React.CSSProperties = {}
  //   for (const key in object) {
  //     if (object[key]) {
  //       styles[`--${namespace}-${key}`] = object[key]
  //     }
  //   }
  //   return styles
  // }

  // const cssVarBlock = (object: Record<string, string>) => {
  //   const styles: React.CSSProperties = {}
  //   for (const key in object) {
  //     if (object[key]) {
  //       styles[`--${namespace}-${block}-${key}`] = object[key]
  //     }
  //   }
  //   return styles
  // }

  const cssVarName = (name: string) => `--${namespace}-${name}`

  const cssVarBlockName = (name: string) => `--${namespace}-${block}-${name}`

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // cssVar,
    cssVarName,
    // cssVarBlock,
    cssVarBlockName
  }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>
