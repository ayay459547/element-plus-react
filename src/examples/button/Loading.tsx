import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import styles from './Loading.module.scss'

import Eleme from '@ayay459547/element-plus-react/icons-svg/eleme.svg?react'

const ButtonLoading: React.FC = () => {
  return (
    <>
      <ElButton type="primary" loading>
        Loading
      </ElButton>
      <ElButton type="primary" loadingIcon={<Eleme />} loading>
        Loading
      </ElButton>
      <ElButton
        type="primary"
        loadingSlot={
          <div className={styles['custom-loading']}>
            <svg className={styles['circular']} viewBox="-10, -10, 50, 50">
              <path
                className={styles['path']}
                d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
              />
            </svg>
          </div>
        }
        loading
      >
        Loading
      </ElButton>
    </>
  )
}

export default ButtonLoading
