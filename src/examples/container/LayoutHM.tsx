import ElContainer from 'ayay-element-plus-react/components/container/ElContainer.tsx'
import ElHeader from 'ayay-element-plus-react/components/container/ElHeader.tsx'
import ElMain from 'ayay-element-plus-react/components/container/ElMain.tsx'

import styles from './common-layout.module.scss'

const LayoutHM: React.FC = () => {
  return (
    <div className={styles['common-layout']}>
      <ElContainer>
        <ElHeader className={styles['el-header']}>Header</ElHeader>
        <ElMain className={styles['el-main']}>Main</ElMain>
      </ElContainer>
    </div>
  )
}

export default LayoutHM
