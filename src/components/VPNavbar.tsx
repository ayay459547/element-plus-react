import React from 'react'
// import { useVitePressData } from '../../hooks/useVitePressData' // 需自行實作
// import { withBase } from '../../utils/withBase' // 需自行實作

import { config } from '@/config'
import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import ElTag from '@ayay459547/element-plus-react/components/tag/ElTag.tsx'
import { Link } from 'react-router-dom'

import { withBase } from '@/utils'
import { IoLogoGithub } from 'react-icons/io5'

// Components
import VPNavbarHamburger from './navbar/VPNavbarHamburger.tsx'

import VPMenu from './navbar/VPMenu.tsx'

// import VPNavbarSearch from './navbar/vp-search'
// import VPNavbarSocialLinks from './navbar/vp-social-links'
// import VPNavbarThemeToggler from './navbar/vp-theme-toggler'
// import VPNavbarTranslation from './navbar/vp-translation'

interface VPNavbarProps {
  fullScreen: boolean
  onToggle: () => void
}

const VPNavbar: React.FC<VPNavbarProps> = ({ fullScreen, onToggle }) => {
  // const version = import.meta.env.VITE_API_ELEMENT_PLUS_VERSION
  const version = import.meta.env.VITE_API_VERSION

  return (
    <div className="navbar-wrapper">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <div className="logo">
              <img
                className="logo"
                style={{ width: '128px', height: '28px' }}
                src={withBase(config.themeConfig.logo)}
                alt="Element Plus Logo"
              />
              <h2>React</h2>
            </div>
          </Link>

          <ElTag size="small" round>
            {/* title="latest version" */}
            {version}
          </ElTag>
        </div>

        <div className="content">
          {/* <VPNavbarSearch className="search" options={theme.agolia} multilang /> */}

          <VPMenu className="menu" />

          <div className="social-links">
            <a href="https://github.com/ayay459547/element-plus-react" target="_blank">
              <ElIcon size={24}>
                <IoLogoGithub />
              </ElIcon>
            </a>
          </div>

          {/* <VPNavbarThemeToggler className="theme-toggler" /> */}

          {/* <VPNavbarTranslation className="translation" /> */}

          {/* <VPNavbarSocialLinks className="social-links" /> */}

          <VPNavbarHamburger active={fullScreen} className="hamburger" onClick={onToggle} />
        </div>
      </div>
    </div>
  )
}

export default VPNavbar
