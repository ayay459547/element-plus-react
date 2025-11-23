import React from 'react'
// import { useNav } from '../../hooks/useNav'
import VPMenuLink from './VpMenuLink'

type Props = {
  className?: string
}

const VPNavbarMenu: React.FC<Props> = ({ className }) => {
  // const navs = useNav()

  // if (!navs) return null

  const navs = [
    {
      text: 'Guide',
      link: '/guide', // temp
      // link: '/guide/design',
      activeMatch: '/guide/'
    },
    {
      text: 'Component',
      link: '/component', // temp
      // link: '/component/overview',
      activeMatch: '/component/'
    },
    {
      text: 'Resource',
      link: '/resource',
      activeMatch: '/resource/'
    }
    // {
    //   text: 'Playground',
    //   link: 'https://element-plus.run'
    // }
  ]

  return (
    <nav className={`navbar-menu ${className}`}>
      {navs.map((item: any, index: number) => (
        <VPMenuLink key={index} item={item} />
      ))}
    </nav>
  )
}

export default VPNavbarMenu
