export declare const toCapitalize: (str: string) => string

export declare const camelize: (str: string) => string

export declare const hyphenate: (str: string) => string

export const kebabCase = hyphenate

/**
 * fork from {@link https://github.com/sindresorhus/escape-string-regexp}
 */
export const escapeStringRegexp = (string = '') =>
  string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')

// NOTE: improve capitalize types. Restore previous code after the [PR](https://github.com/vuejs/core/pull/6212) merge
export const capitalize = <T extends string>(str: T) => toCapitalize(str) as Capitalize<T>
