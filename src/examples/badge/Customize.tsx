import ElBadge from 'ayay-element-plus-react/components/badge/ElBadge.tsx'
import ElButton from 'ayay-element-plus-react/components/button/ElButton.tsx'
import ElIcon from 'ayay-element-plus-react/components/icon/ElIcon.tsx'
import { CiMail } from 'react-icons/ci'
import styles from './Customize.module.scss'

const BadgeCustomize: React.FC = () => {
  return (
    <>
      <ElBadge value="new" className={styles['item']}>
        <ElButton>comments</ElButton>
      </ElBadge>
      <ElBadge value="hot" className={styles['item']}>
        <ElButton>replies</ElButton>
      </ElBadge>
      <ElBadge
        value="99"
        className={styles['item']}
        content={
          <div className={styles['custom-content']}>
            <ElIcon>
              <CiMail />
            </ElIcon>
            <span>99</span>
          </div>
        }
      >
        <ElButton>share</ElButton>
      </ElBadge>
    </>
  )
}

export default BadgeCustomize
