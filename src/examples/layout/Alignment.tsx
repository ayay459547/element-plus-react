import ElCol from '@ayay/element-plus-react/components/col/ElCol.tsx'
import ElRow from '@ayay/element-plus-react/components/row/ElRow.tsx'
import type { ElRowBaseProps } from '@ayay/element-plus-react/components/row/types'
import clsx from 'clsx'
import styles from './BasicLayout.module.scss'

const Alignment: React.FC = () => {
  const justifyList: Array<ElRowBaseProps['justify']> = [
    undefined,
    'center',
    'end',
    'space-between',
    'space-around',
    'space-evenly'
  ]

  return (
    <>
      {justifyList.map((justifyItem) => {
        return (
          <ElRow
            gutter={20}
            justify={justifyItem}
            className={clsx(styles['el-row'], styles['row-bg'])}
          >
            <ElCol span={6}>
              <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
            </ElCol>
            <ElCol span={6}>
              <div className={clsx(styles['grid-content'], styles['ep-bg-purple-light'])} />
            </ElCol>
            <ElCol span={6}>
              <div className={clsx(styles['grid-content'], styles['ep-bg-purple'])} />
            </ElCol>
          </ElRow>
        )
      })}
    </>
  )
}

export default Alignment
