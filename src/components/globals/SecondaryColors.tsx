import ElCol from '@ayay459547/element-plus-react/components/col/ElCol.tsx'
import ElRow from '@ayay459547/element-plus-react/components/row/ElRow.tsx'
import clsx from 'clsx'
import styles from './MainColor.module.scss'

const SecondaryColors: React.FC = () => {
  const colorsType = ['success', 'warning', 'danger', 'info']

  const colorsTypeValue = ['#67C23A', '#E6A23C', '#F56C6C', '#909399']

  const colorLevel = [3, 5, 7, 8, 9].map((i) => `light-${i}`)
  colorLevel.unshift('dark-2')

  const getColorValue = (type: string) => {
    return `var(--el-color-${type})`
  }

  return (
    <ElRow gutter={12}>
      {colorsType.map((type, i) => {
        return (
          <ElCol key={i} span={6} xs={{ span: 12 }}>
            <div className={styles['demo-color-box']} style={{ background: getColorValue(type) }}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
              <div className={clsx(styles['value'], 'text-xs')}>{colorsTypeValue[i]}</div>
              <div className={styles['bg-color-sub']} style={{ background: getColorValue(type) }}>
                {colorLevel.map((level) => {
                  return (
                    <div
                      key={level}
                      className={clsx(styles['bg-blue-sub-item'], 'hover:shadow')}
                      style={{
                        width: `${100 / 6}%`,
                        background: `var(--el-color-${type}-${level})`
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </ElCol>
        )
      })}
    </ElRow>
  )
}

export default SecondaryColors
