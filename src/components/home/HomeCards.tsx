import React from 'react'
import { Link } from 'react-router-dom'

import ElCard from 'ayay-element-plus-react/components/card/ElCard.tsx'

import ComponentSvg from './svg/ComponentSvg'
import GuideSvg from './svg/GuideSvg'
import ResourceSvg from './svg/ResourceSvg'

import homeLang from '@/crowdin/pages/home.json'

import styles from './HomeCards.module.scss'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className={styles['cards']}>
        {/* Card 1 */}
        <ElCard
          className={styles['custom-card']}
          shadow="hover"
          footerClass={styles['card-footer']}
          footer={<Link to="/guide">{homeLang['5']}</Link>}
        >
          <GuideSvg />
          <h3>{homeLang['3']}</h3>
          <p>{homeLang['4']}</p>
        </ElCard>

        {/* Card 2 */}
        <ElCard
          className={styles['custom-card']}
          shadow="hover"
          footerClass={styles['card-footer']}
          footer={<Link to="/component">{homeLang['5']}</Link>}
        >
          <ComponentSvg />
          <h3>{homeLang['6']}</h3>
          <p>{homeLang['7']}</p>
        </ElCard>

        {/* Card 3 */}
        <ElCard
          className={styles['custom-card']}
          shadow="hover"
          footerClass={styles['card-footer']}
          footer={<Link to="/resource">{homeLang['5']}</Link>}
        >
          <ResourceSvg />
          <h3>{homeLang['8']}</h3>
          <p>{homeLang['9']}</p>
        </ElCard>
      </div>
    </div>
  )
}

export default HomePage
