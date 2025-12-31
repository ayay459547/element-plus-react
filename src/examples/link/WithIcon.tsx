import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import ElLink from '@ayay459547/element-plus-react/components/link/ElLink.tsx'
import Edit from '@ayay459547/element-plus-react/icons-svg/edit.svg?react'
import IconView from '@ayay459547/element-plus-react/icons-svg/view.svg?react'
import styles from './Basic.module.scss'

const LinkWithIcon: React.FC = () => {
  return (
    <div>
      <ElLink className={styles['el-link']} icon={<Edit />}>
        Edit
      </ElLink>
      <ElLink className={styles['el-link']}>
        Check
        <ElIcon className="el-icon--right">
          <IconView />
        </ElIcon>
      </ElLink>
    </div>
  )
}

export default LinkWithIcon
