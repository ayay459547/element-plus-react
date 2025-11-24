import styles from './ParallaxHome.module.scss'
// import { config } from '@/config'

const ParallaxHome = () => {
  return (
    <div className="hero-content">
      <div>
        <div className="home-page">
          <div className={styles['banner']}>
            <div className={styles['banner-desc']}>
              <h1>Element Plus</h1>
              <p>A Vue 3 based component library for designers and developers</p>
            </div>
          </div>
          <img src="/images/theme-index-blue.png" alt="Home Page" />
        </div>
      </div>
    </div>
  )
}
export default ParallaxHome
