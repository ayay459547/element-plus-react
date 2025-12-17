import ElAside from '@ayay/element-plus-react/components/container/ElAside.tsx'
import ElContainer from '@ayay/element-plus-react/components/container/ElContainer.tsx'
import ElMain from '@ayay/element-plus-react/components/container/ElMain.tsx'

import styles from './common-layout.module.scss'

const LayoutAM: React.FC = () => {
  return (
    <div className={styles['common-layout']}>
      <ElContainer>
        <ElAside width="200px" className={styles['el-aside']}>
          Aside
        </ElAside>
        <ElMain className={styles['el-main']}>Main</ElMain>
        <ElAside width="200px" className={styles['el-aside']}>
          Aside
        </ElAside>
      </ElContainer>
    </div>
  )
}

export default LayoutAM
