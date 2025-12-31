import { useCssVar } from '@/hooks/useCssVar'
import styles from './Border.module.scss'

import ElCol from '@ayay459547/element-plus-react/components/col/ElCol.tsx'
import ElRow from '@ayay459547/element-plus-react/components/row/ElRow.tsx'

const RadiusItem: React.FC<{
  type: string
  name: string
}> = (radius) => {
  const [value] = useCssVar(`--el-border-radius-${radius.type}`)

  return (
    <ElCol {...{ span: 6, xs: { span: 12 } }}>
      <div className={styles['title']}>{radius.name}</div>
      <div className={styles['value']}>
        <code>
          border-radius:
          {radius.type ? value : '"0px"'}
        </code>
      </div>
      <div
        className={styles['radius']}
        style={{
          borderRadius: radius.type ? `var(--el-border-radius-${radius.type})` : ''
        }}
      />
    </ElCol>
  )
}

const BorderRadius: React.FC = () => {
  const radiusGroup = [
    {
      name: 'No Radius',
      type: ''
    },
    {
      name: 'Small Radius',
      type: 'small'
    },
    {
      name: 'Large Radius',
      type: 'base'
    },
    {
      name: 'Round Radius',
      type: 'round'
    }
  ]

  return (
    <ElRow gutter={12} className={styles['demo-radius']}>
      {radiusGroup.map((radius, i) => {
        return <RadiusItem key={i} {...radius} />
      })}
    </ElRow>
  )
}

export default BorderRadius
