import ElAvatar from 'ayay-element-plus-react/components/avatar/ElAvatar.tsx'
import type { ElAvatarProps } from 'ayay-element-plus-react/components/avatar/types'
import ElCol from 'ayay-element-plus-react/components/col/ElCol.tsx'
import ElRow from 'ayay-element-plus-react/components/row/ElRow.tsx'
import clsx from 'clsx'
import styles from './Basic.module.scss'

const AvatarBasic: React.FC = () => {
  const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
  const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
  const sizeList: Array<ElAvatarProps['size']> = ['small', 'default', 'large']

  return (
    <ElRow className={clsx(styles['demo-avatar'], styles['demo-basic'])}>
      <ElCol lg={12} md={12}>
        <div className={styles['sub-title']}>circle</div>
        <div className={styles['demo-basic--circle']}>
          <div className={styles['block']}>
            <ElAvatar size={50} src={circleUrl} />
          </div>
          {sizeList.map((size) => {
            return (
              <div key={`${size}-1`} className={styles['block']}>
                <ElAvatar size={size} src={circleUrl} />
              </div>
            )
          })}
        </div>
      </ElCol>
      <ElCol lg={12} md={12}>
        <div className={styles['sub-title']}>square</div>
        <div className={styles['demo-basic--circle']}>
          <div className={styles['block']}>
            <ElAvatar shape="square" size={50} src={squareUrl} />
          </div>
          {sizeList.map((size) => {
            return (
              <div key={`${size}-2`} className={styles['block']}>
                <ElAvatar shape="square" size={size} src={squareUrl} />
              </div>
            )
          })}
        </div>
      </ElCol>
    </ElRow>
  )
}

export default AvatarBasic
