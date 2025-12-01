import VpHeroContent from '@/components/VpHeroContent.tsx'
import styles from './Resource.module.scss'

const Resource = () => {
  return (
    <VpHeroContent>
      <div className={styles['resource']}>
        <h1>Resource Component</h1>
      </div>
    </VpHeroContent>
  )
}

export default Resource
