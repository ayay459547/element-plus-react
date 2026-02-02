import { useLayoutEffect } from 'react'
import type { ElInputProps } from './types'

export function useTextareaAutosize(
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
  value: string,
  autosize?: ElInputProps['autosize']
) {
  useLayoutEffect(() => {
    const el = textareaRef.current
    if (!el || !autosize) return

    const minRows = typeof autosize === 'object' ? autosize.minRows : undefined
    const maxRows = typeof autosize === 'object' ? autosize.maxRows : undefined

    // reset height
    el.style.height = 'auto'
    el.style.overflowY = 'auto'

    const lineHeight = getLineHeight(el)
    let height = el.scrollHeight

    if (minRows) {
      height = Math.max(height, minRows * lineHeight)
    }

    if (maxRows) {
      height = Math.min(height, maxRows * lineHeight + 10)
    }

    el.style.height = `${height}px`
  }, [textareaRef, value, autosize])
}

function getLineHeight(el: HTMLTextAreaElement) {
  const computed = window.getComputedStyle(el)
  return parseFloat(computed.lineHeight)
}
