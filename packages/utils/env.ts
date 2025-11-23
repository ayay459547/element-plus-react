export const isClient = typeof window !== 'undefined'

export const isIOS = (() => {
  if (!isClient) return false
  return /iPhone|iPad|iPod/i.test(window.navigator.userAgent)
})()

export const isFirefox = (): boolean => {
  return isClient && /firefox/i.test(window.navigator.userAgent)
}

export const isAndroid = (): boolean => {
  return isClient && /android/i.test(window.navigator.userAgent)
}
