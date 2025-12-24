import ElAvatar from '@ayay/element-plus-react/components/avatar/ElAvatar.tsx'
import { FaUser } from 'react-icons/fa'
import styles from './Types.module.scss'

const AvatarTypes: React.FC = () => {
  return (
    <div className={styles['demo-type']}>
      <div>
        <ElAvatar icon={<FaUser />} />
      </div>
      <div>
        <ElAvatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div>
        <ElAvatar> user </ElAvatar>
      </div>
    </div>
  )
}

export default AvatarTypes
