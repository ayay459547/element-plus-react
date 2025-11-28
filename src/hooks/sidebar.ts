import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import componentSideNav from '@/crowdin/pages/component.json'
import guideSideNav from '@/crowdin/pages/guide.json'

type Child = {
  link: string
  text: string
}

type NavItem = {
  text: string
  children: Child[]
}

const getSidebarConfig = (pathname: string) => {
  if (pathname === '/') return []
  if (pathname.startsWith('/guide')) {
    return Object.values(guideSideNav).map((item: NavItem) => {
      return {
        ...item,
        children: item.children.map((child: Child) => {
          return {
            ...child,
            link: `${child.link}`
          }
        })
      }
    })
  }
  if (pathname.startsWith('/component')) {
    return Object.values(componentSideNav).map((item: NavItem) => {
      return {
        ...item,
        children: item.children.map((child: Child) => {
          return {
            ...child,
            link: `/component${child.link}`
          }
        })
      }
    })
  }
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
