import styles from './ParallaxHome.module.scss'
// import { config } from '@/config'
import HomeCards from '@/components/home/HomeCards.tsx'

const ParallaxHome = () => {
  return (
    <div className="hero-content">
      <div>
        <div className="home-page">
          <div className={styles['banner']}>
            <div className={styles['banner-desc']}>
              <h1>Element Plus React</h1>
              <p>Use Element Plus as a reference for creating a React UI framework</p>
            </div>
          </div>
          <div className={styles['img-wrapper']}>
            <img
              className={styles['img-main']}
              src="/images/theme-index-blue.png"
              alt="Home Page"
            />
          </div>

          <div style={{ margin: '120px 0' }}></div>

          <HomeCards />
        </div>
      </div>
    </div>
  )
}
export default ParallaxHome
