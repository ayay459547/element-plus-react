import React, { useEffect, useRef, useState } from 'react'
import './Transition.scss'

import type { TransitionProps } from './types'

const COMPONENT_NAME = 'Transition'

// React 版 <transition>
const Transition: React.FC<TransitionProps> = ({
  inProp,
  name = 'fade',
  appear = true,
  duration = 200,
  children
}) => {
  const nodeRef = useRef<HTMLElement | null>(null)
  const [rendered, setRendered] = useState(inProp) // 控制是否渲染

  // 設定子元素的 ref
  const attachRef = (node: any) => {
    nodeRef.current = node
  }

  const addClass = (cls: string) => {
    nodeRef.current?.classList.add(cls)
  }

  const removeClass = (cls: string) => {
    nodeRef.current?.classList.remove(cls)
  }

  // 進場動畫
  const enter = () => {
    setRendered(true)

    const el = nodeRef.current!
    el.style.transition = `all ${duration}ms ease`

    addClass(`${name}-enter`)
    requestAnimationFrame(() => {
      addClass(`${name}-enter-active`)
      removeClass(`${name}-enter`)
    })

    setTimeout(() => {
      removeClass(`${name}-enter-active`)
    }, duration)
  }

  // 離場動畫
  const leave = () => {
    const el = nodeRef.current!
    el.style.transition = `all ${duration}ms ease`

    addClass(`${name}-leave`)
    requestAnimationFrame(() => {
      addClass(`${name}-leave-active`)
      removeClass(`${name}-leave`)
    })

    setTimeout(() => {
      removeClass(`${name}-leave-active`)
      setRendered(false) // 移除 DOM
    }, duration)
  }

  // 進/退切換
  useEffect(() => {
    if (inProp) {
      enter()
    } else {
      leave()
    }
  }, [inProp])

  // 初次渲染 appear
  useEffect(() => {
    if (appear && inProp) {
      enter()
    }
  }, [])

  if (!rendered) return null

  if (!React.isValidElement(children)) {
    throw new Error('Children must be a valid React element')
  }

  return React.cloneElement(children as React.ReactElement<any>, {
    ref: attachRef
  })
}

Transition.displayName = COMPONENT_NAME

export default Transition
