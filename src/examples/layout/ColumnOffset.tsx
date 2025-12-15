import ElCol from '@ayay/element-plus-react/components/col/ElCol.tsx'
import ElRow from '@ayay/element-plus-react/components/row/ElRow.tsx'
import clsx from 'clsx'
import styles from './BasicLayout.module.scss'

const ColumnOffset: React.FC = () => {
  return (
    <>
      <ElRow gutter={20} className={styles['el-row']}>
        <ElCol span={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={6} offset={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
      </ElRow>
      <ElRow gutter={20} className={styles['el-row']}>
        <ElCol span={6} offset={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={6} offset={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
      </ElRow>
      <ElRow gutter={20} className={styles['el-row']}>
        <ElCol span={12} offset={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
      </ElRow>
    </>
  )
}

export default ColumnOffset
