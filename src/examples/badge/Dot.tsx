import ElBadge from '@ayay459547/element-plus-react/components/badge/ElBadge.tsx'
import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import { IoMdShare } from 'react-icons/io'
import styles from './Max.module.scss'

const BadgeDot: React.FC = () => {
  return (
    <>
      <ElBadge isDot className={styles['item']}>
        query
      </ElBadge>
      <ElBadge isDot className={styles['item']}>
        <ElButton className={styles['share-button']} icon={<IoMdShare />} type="primary" />
      </ElBadge>
    </>
  )
}

export default BadgeDot
