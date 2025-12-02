import styles from './ElButton.module.scss'
import type { ButtonProps } from './types'

const ElButton: React.FC<ButtonProps> = () => {
  return <button className={styles['el-button']}>Button</button>
}

export default ElButton
