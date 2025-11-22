import React from 'react'
// import { useVitePressData } from '../../hooks/useVitePressData' // 需自行實作
// import { withBase } from '../../utils/withBase' // 需自行實作

import { config } from '@/config'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

// Components
// import VPNavbarHamburger from './navbar/vp-hamburger'

// TODO:
// import VPMenu from './navbar/VPMenu'

// import VPNavbarSearch from './navbar/vp-search'
// import VPNavbarSocialLinks from './navbar/vp-social-links'
// import VPNavbarThemeToggler from './navbar/vp-theme-toggler'
// import VPNavbarTranslation from './navbar/vp-translation'

interface Props {
  fullScreen: boolean
  onToggle?: () => void
}

const VPNavbar: React.FC<Props> = () => {
  const version = '2.11.8'

  return (
    <div className="navbar-wrapper">
      <div className="header-container">
        <div className={styles['logo-container']}>
          <Link to="/">
            <img
              className="logo"
              style={{ width: '128px', height: '28px' }}
              src={config.themeConfig.logo}
              alt="Element Plus Logo"
            />
          </Link>

          <span className="el-tag el-tag--small el-tag--round" title="latest version">
            {version}
          </span>
        </div>

        <div className="content">
          {/* <VPNavbarSearch className="search" options={theme.agolia} multilang /> */}

          {/* TODO: */}
          {/* <VPMenu className="menu" /> */}

          {/* <VPNavbarThemeToggler className="theme-toggler" /> */}

          {/* <VPNavbarTranslation className="translation" /> */}

          {/* <VPNavbarSocialLinks className="social-links" /> */}

          {/* <VPNavbarHamburger active={fullScreen} className="hamburger" onClick={onToggle} /> */}
        </div>
      </div>
    </div>
  )
}

export default VPNavbar
