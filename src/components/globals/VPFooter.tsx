import homeLang from '@/crowdin/pages/home.json'
import clsx from 'clsx'
import styles from './VPFooter.module.scss'

interface Props {
  isHome?: boolean
}

const VPFooter: React.FC<Props> = ({ isHome }) => {
  const githubLink = (link: string) => {
    return `https://github.com//${link}`
  }

  return (
    <footer className={clsx(styles['footer'], isHome ? styles['is-home'] : '')}>
      <div className={styles['footer-main']}>
        <h4>{homeLang['10']}</h4>
        <a href="https://element-plus.org/" className={styles['footer-main-link']} target="_blank">
          {homeLang['element-plus']}
        </a>
        <a href="https://element.eleme.io/" className={styles['footer-main-link']} target="_blank">
          {homeLang['element-ui']}
        </a>
        <a href="https://vite.dev/" className={styles['footer-main-link']} target="_blank">
          {homeLang['vite']}
        </a>
        <a href="https://vuejs.org/" className={styles['footer-main-link']} target="_blank">
          {homeLang['vue']}
        </a>
        <a href="https://react.dev/" className={styles['footer-main-link']} target="_blank">
          {homeLang['react']}
        </a>
      </div>

      <div className={styles['footer-main']}>
        <h4>{homeLang['11']}</h4>
        <a
          href={githubLink(homeLang['element-plus-github'])}
          className={styles['footer-main-link']}
          target="_blank"
        >
          {homeLang['element-plus-github']}
        </a>
        <a
          href={githubLink(homeLang['element-ui-github'])}
          className={styles['footer-main-link']}
          target="_blank"
        >
          {homeLang['element-ui-github']}
        </a>
        <a
          href={githubLink(homeLang['vite-github'])}
          className={styles['footer-main-link']}
          target="_blank"
        >
          {homeLang['vite-github']}
        </a>
        <a
          href={githubLink(homeLang['vue-github'])}
          className={styles['footer-main-link']}
          target="_blank"
        >
          {homeLang['vue-github']}
        </a>
        <a
          href={githubLink(homeLang['react-github'])}
          className={styles['footer-main-link']}
          target="_blank"
        >
          {homeLang['react-github']}
        </a>
      </div>
    </footer>
  )
}

export default VPFooter
