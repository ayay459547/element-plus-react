import styles from './ParallaxHome.module.scss'
// import { config } from '@/config'
import HomeFooter from '@/components/globals/VpFooter.tsx'
import HomeCards from '@/components/home/HomeCards.tsx'
import VpHeroContent from '@/components/VpHeroContent.tsx'
import { withBase } from '@/utils'

const ParallaxHome = () => {
  return (
    <VpHeroContent>
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
              src={withBase('/images/theme-index-blue.png')}
              alt="Home Page"
            />
          </div>

          <div style={{ margin: '120px 0' }}></div>

          <HomeCards />
        </div>
      </div>
      <HomeFooter isHome={true} />
    </VpHeroContent>
  )
}
export default ParallaxHome
