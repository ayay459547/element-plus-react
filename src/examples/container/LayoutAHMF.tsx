import ElAside from '@ayay459547/element-plus-react/components/container/ElAside.tsx'
import ElContainer from '@ayay459547/element-plus-react/components/container/ElContainer.tsx'
import ElFooter from '@ayay459547/element-plus-react/components/container/ElFooter.tsx'
import ElHeader from '@ayay459547/element-plus-react/components/container/ElHeader.tsx'
import ElMain from '@ayay459547/element-plus-react/components/container/ElMain.tsx'

import styles from './common-layout.module.scss'

const LayoutAHMF: React.FC = () => {
  return (
    <div className={styles['common-layout']}>
      <ElContainer>
        <ElAside width="200px" className={styles['el-aside']}>
          Aside
        </ElAside>
        <ElContainer>
          <ElHeader className={styles['el-header']}>Header</ElHeader>
          <ElContainer>
            <ElMain className={styles['el-main']}>Main</ElMain>
            <ElFooter className={styles['el-footer']}>Footer</ElFooter>
          </ElContainer>
        </ElContainer>
      </ElContainer>
    </div>
  )
}

export default LayoutAHMF
