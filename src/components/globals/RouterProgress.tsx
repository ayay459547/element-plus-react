// RouterProgress.tsx
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './RouterProgress.scss'

NProgress.configure({
  showSpinner: false,
  trickle: true,
  trickleSpeed: 400,
  minimum: 0.2,
  easing: 'ease',
  speed: 400
})

export default function RouterProgress() {
  const location = useLocation()

  useEffect(() => {
    NProgress.start()
    NProgress.done()
  }, [location.pathname])

  return null
}
