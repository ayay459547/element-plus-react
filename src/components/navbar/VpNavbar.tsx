import React from 'react'
// import { useVitePressData } from '../../hooks/useVitePressData' // 需自行實作
// import { withBase } from '../../utils/withBase' // 需自行實作

import { config } from '@/config'
import ElTag from '@element-plus/components/tag/ElTag.tsx'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

import { withBase } from '@/utils'
import { LogoGithub } from '@ricons/ionicons5'
import { Icon } from '@ricons/utils'

// Components
// import VPNavbarHamburger from './navbar/vp-hamburger'

import VPMenu from './VPMenu'

// import VPNavbarSearch from './navbar/vp-search'
// import VPNavbarSocialLinks from './navbar/vp-social-links'
// import VPNavbarThemeToggler from './navbar/vp-theme-toggler'
// import VPNavbarTranslation from './navbar/vp-translation'

interface Props {
  fullScreen: boolean
  onToggle?: () => void
}

const VPNavbar: React.FC<Props> = () => {
  const version = import.meta.env.VITE_API_ELEMENT_PLUS_VERSION

  return (
    <div className="navbar-wrapper">
      <div className="header-container">
        <div className={styles['logo-container']}>
          <Link to="/">
            <div className={styles['logo']}>
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

          <div className={styles['social-links']}>
            <a href="https://github.com/ayay459547/element-plus-react" target="_blank">
              <Icon size={'24px'}>
                <LogoGithub />
              </Icon>
            </a>
          </div>

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
