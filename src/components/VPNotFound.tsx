import { useNavigate } from 'react-router-dom'

import VPHeroContent from '@/components/VPHeroContent.tsx'
import localeData from '@/crowdin/pages/not-found.json'
import ElButton from 'ayay-element-plus-react/components/button/ElButton.tsx'
import ElIcon from 'ayay-element-plus-react/components/icon/ElIcon.tsx'

import { IoCloseCircle } from 'react-icons/io5'

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
          <ElIcon size={64}>
            <IoCloseCircle />
          </ElIcon>
        </div>
        <p className={styles['title']}>{locale['title']}</p>
        <p className={styles['desc']}>{locale['desc']}</p>
        <ElButton style={{ marginTop: '1.5rem' }} onClick={goHome}>
          {locale['button-title']}
        </ElButton>
      </div>
    </VPHeroContent>
  )
}

export default VPNotFound
