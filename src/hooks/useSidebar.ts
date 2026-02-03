import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import componentSideNav from '@/crowdin/pages/component.json'
import guideSideNav from '@/crowdin/pages/guide.json'
import type { Link } from '@/types'

type NavItem = {
  text: string
  children: Link[]
}

const guideSidebars = Object.values(guideSideNav).map((item: NavItem) => {
  return {
    ...item,
    children: item.children.map((child: Link) => {
      return {
        ...child,
        link: `${child.link}`
      }
    })
  }
})

const componentSidebars = Object.values(componentSideNav).map((item: NavItem) => {
  return {
    ...item,
    children: item.children.map((child: Link) => {
      return {
        ...child,
        link: `/component${child.link}`
      }
    })
  }
})

const getSidebarConfig = (pathname: string) => {
  if (pathname === '/') return []
  if (pathname.startsWith('/guide')) return guideSidebars
  if (pathname.startsWith('/component')) return componentSidebars
  if (pathname.startsWith('/resource')) return []
  return []
}

export const useSidebar = () => {
  const location = useLocation()

  // React 的 computed → useMemo
  const sidebars = useMemo(() => {
    return getSidebarConfig(location.pathname)
  }, [location.pathname])

  return {
    sidebars,
    hasSidebar: sidebars.length > 0
  }
}
