import ElCol from 'ayay-element-plus-react/components/col/ElCol.tsx'
import ElRow from 'ayay-element-plus-react/components/row/ElRow.tsx'
import clsx from 'clsx'
import styles from './BasicLayout.module.scss'

const ResponsiveLayout: React.FC = () => {
  return (
    <ElRow gutter={10} className={styles['el-row']}>
      <ElCol xs={8} sm={6} md={4} lg={3} xl={1}>
        <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
      </ElCol>
      <ElCol xs={4} sm={6} md={8} lg={9} xl={11}>
        <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
      </ElCol>
      <ElCol xs={4} sm={6} md={8} lg={9} xl={11}>
        <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
      </ElCol>
      <ElCol xs={8} sm={6} md={4} lg={3} xl={1}>
        <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
      </ElCol>
    </ElRow>
  )
}

export default ResponsiveLayout
