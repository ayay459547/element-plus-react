import homeLang from '@/crowdin/pages/home.json'
import clsx from 'clsx'
import styles from './VpFooter.module.scss'

interface Props {
  isHome?: boolean
}

const VpFooter: React.FC<Props> = ({ isHome }) => {
  return (
    <footer className={clsx(styles['footer'], isHome ? styles['is-home'] : '')}>
      <div className={styles['footer-main']}>
        <h4>{homeLang['10']}</h4>
        <a href="https://cn.element-plus.org/zh-CN/" className="footer-main-link" target="_blank">
          {homeLang['china_mirror']}
        </a>
        <a
          href="https://github.com/element-plus/element-plus/releases"
          className="footer-main-link"
          target="_blank"
        >
          {homeLang['12']}
        </a>
        <a href="https://element.eleme.io/" className="footer-main-link" target="_blank">
          {homeLang['13']}
        </a>
        <a href="https://element-plus.org/sitemap.xml" className="footer-main-link" target="_blank">
          {homeLang['site_map']}
        </a>
      </div>

      <div className="footer-main">
        <h4>{homeLang['19']}</h4>
        <a
          href="https://github.com/element-plus/element-plus"
          className="footer-main-link"
          target="_blank"
        >
          {homeLang['11']}
        </a>
        <a
          href="https://discord.com/invite/gXK9XNzW3X"
          className="footer-main-link"
          target="_blank"
        >
          {homeLang['discord']}
        </a>
        <a
          href="https://github.com/element-plus/element-plus/issues"
          className="footer-main-link"
          target="_blank"
        >
          {homeLang['16']}
        </a>
        <a
          href="https://github.com/element-plus/element-plus/blob/dev/.github/CONTRIBUTING.en-US.md"
          className="footer-main-link"
          target="_blank"
        >
          {homeLang['17']}
        </a>
        <a
          href="https://segmentfault.com/t/element-plus"
          className="footer-main-link"
          target="_blank"
        >
          {homeLang['18']}
        </a>
      </div>
    </footer>
  )
}

export default VpFooter
