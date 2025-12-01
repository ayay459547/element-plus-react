import { useNavigate } from 'react-router-dom'

import VPHeroContent from '@/components/VPHeroContent.tsx'
import localeData from '@/crowdin/pages/not-found.json'
import { CloseCircle } from '@ricons/ionicons5'
import { Icon } from '@ricons/utils'

import styles from './VPNotFound.module.scss'

const VPNotFound: React.FC = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/') // 跳轉到首頁
  }

  const locale = localeData

  return (
    <VPHeroContent>
      <div className={styles['not-found']}>
        <div className={styles['error-icon']}>
          <Icon size={'64px'}>
            <CloseCircle />
          </Icon>
        </div>
        <p className={styles['title']}>{locale['title']}</p>
        <p className={styles['desc']}>{locale['desc']}</p>
        <button className={styles['el-button']} onClick={goHome}>
          {locale['button-title']}
        </button>
      </div>
    </VPHeroContent>
  )
}

export default VPNotFound
