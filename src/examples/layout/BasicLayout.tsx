import ElCol from 'ayay-element-plus-react/components/col/ElCol.tsx'
import ElRow from 'ayay-element-plus-react/components/row/ElRow.tsx'
import clsx from 'clsx'
import styles from './BasicLayout.module.scss'

const BasicLayout: React.FC = () => {
  return (
    <>
      <ElRow className={styles['el-row']}>
        <ElCol className={styles['el-col']} span={24}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-dark'])} />
        </ElCol>
      </ElRow>
      <ElRow className={styles['el-row']}>
        <ElCol span={12}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={12}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
        </ElCol>
      </ElRow>
      <ElRow className={styles['el-row']}>
        <ElCol span={8}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={8}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
        </ElCol>
        <ElCol span={8}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
      </ElRow>
      <ElRow className={styles['el-row']}>
        <ElCol span={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
        </ElCol>
        <ElCol span={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={6}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
        </ElCol>
      </ElRow>
      <ElRow className={styles['el-row']}>
        <ElCol span={4}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={4}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
        </ElCol>
        <ElCol span={4}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={4}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
        </ElCol>
        <ElCol span={4}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
        </ElCol>
        <ElCol span={4}>
          <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
        </ElCol>
      </ElRow>
    </>
  )
}

export default BasicLayout
