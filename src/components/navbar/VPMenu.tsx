import { useNav } from '@/hooks/nav'
import React from 'react'
import VPMenuLink from './VPMenuLink.tsx'

type Props = {
  className?: string
}

const VPNavbarMenu: React.FC<Props> = ({ className }) => {
  const navs = useNav()
  if (!navs) return null

  return (
    <nav className={`navbar-menu ${className}`}>
      {navs.map((item: any, index: number) => (
        <VPMenuLink key={index} item={item} />
      ))}
    </nav>
  )
}

export default VPNavbarMenu
