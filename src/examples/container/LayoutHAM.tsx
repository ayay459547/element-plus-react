import ElAside from 'ayay-element-plus-react/components/container/ElAside.tsx'
import ElContainer from 'ayay-element-plus-react/components/container/ElContainer.tsx'
import ElHeader from 'ayay-element-plus-react/components/container/ElHeader.tsx'
import ElMain from 'ayay-element-plus-react/components/container/ElMain.tsx'

import styles from './common-layout.module.scss'

const LayoutHAM: React.FC = () => {
  return (
    <div className={styles['common-layout']}>
      <ElContainer>
        <ElHeader className={styles['el-header']}>Header</ElHeader>
        <ElContainer>
          <ElAside width="200px" className={styles['el-aside']}>
            Aside
          </ElAside>
          <ElMain className={styles['el-main']}>Main</ElMain>
        </ElContainer>
      </ElContainer>
    </div>
  )
}

export default LayoutHAM
