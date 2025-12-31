// import { copyText } from '@/utils'
import ElCol from '@ayay459547/element-plus-react/components/col/ElCol.tsx'
import ElRow from '@ayay459547/element-plus-react/components/row/ElRow.tsx'
import clsx from 'clsx'
import styles from './MainColor.module.scss'

const MainColor: React.FC = () => {
  const primary = 'var(--el-color-primary)'

  // const copyColor = (colorValue: string) => {
  //   copyText(colorValue)
  // }

  const colorLevel = [3, 5, 7, 8, 9].map((i) => `light-${i}`)
  colorLevel.unshift('dark-2')

  return (
    <ElRow gutter={12}>
      <ElCol span={10} xs={{ span: 12 }}>
        <div className={styles['demo-color-box']} style={{ background: primary }}>
          Brand Color
          {/* <div className={clsx(styles['value'], 'text-xs')}>{primary.toUpperCase()}</div> */}
          <div className={clsx(styles['value'], 'text-xs')}>{'#409eff'}</div>
          <div className={styles['bg-color-sub']} style={{ background: primary }}>
            {colorLevel.map((level) => {
              return (
                <div
                  key={level}
                  className={clsx(styles['bg-blue-sub-item'], 'hover:shadow')}
                  style={{
                    width: `${100 / 6}%`,
                    background: 'var(--el-color-primary-' + level + ')'
                  }}
                />
              )
            })}
          </div>
        </div>
      </ElCol>
    </ElRow>
  )
}

export default MainColor
