import ElAvatar from '@ayay459547/element-plus-react/components/avatar/ElAvatar.tsx'
import type { CSSProperties } from 'react'
import styles from './Fit.module.scss'

const AvatarFit: React.FC = () => {
  const fits: CSSProperties['objectFit'][] = ['fill', 'contain', 'cover', 'none', 'scale-down']
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

  return (
    <div className={styles['demo-fit']}>
      {fits.map((fit) => {
        return (
          <div key={fit} className={styles['block']}>
            <span className={styles['title']}>{fit}</span>
            <ElAvatar shape="square" size={100} fit={fit} src={url} />
          </div>
        )
      })}
    </div>
  )
}

export default AvatarFit
