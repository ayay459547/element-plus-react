import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import Check from '@ayay/element-plus-react/icons-svg/check.svg?react'
import Delete from '@ayay/element-plus-react/icons-svg/delete.svg?react'
import Edit from '@ayay/element-plus-react/icons-svg/edit.svg?react'
import Message from '@ayay/element-plus-react/icons-svg/message.svg?react'
import Search from '@ayay/element-plus-react/icons-svg/search.svg?react'
import Star from '@ayay/element-plus-react/icons-svg/star.svg?react'
import styles from './Basic.module.scss'

const ButtonBasic: React.FC = () => {
  return (
    <div className={styles['button-example']}>
      <div className={styles['button-row']}>
        <ElButton>Default</ElButton>
        <ElButton type="primary">Primary</ElButton>
        <ElButton type="success">Success</ElButton>
        <ElButton type="info">Info</ElButton>
        <ElButton type="warning">Warning</ElButton>
        <ElButton type="danger">Danger</ElButton>
      </div>

      <div className={styles['button-row']}>
        <ElButton plain>Plain</ElButton>
        <ElButton type="primary" plain>
          Primary
        </ElButton>
        <ElButton type="success" plain>
          Success
        </ElButton>
        <ElButton type="info" plain>
          Info
        </ElButton>
        <ElButton type="warning" plain>
          Warning
        </ElButton>
        <ElButton type="danger" plain>
          Danger
        </ElButton>
      </div>

      <div className={styles['button-row']}>
        <ElButton round>Round</ElButton>
        <ElButton type="primary" round>
          Primary
        </ElButton>
        <ElButton type="success" round>
          Success
        </ElButton>
        <ElButton type="info" round>
          Info
        </ElButton>
        <ElButton type="warning" round>
          Warning
        </ElButton>
        <ElButton type="danger" round>
          Danger
        </ElButton>
      </div>

      <div className={styles['button-row']}>
        <ElButton circle icon={<Search />} />
        <ElButton type="primary" icon={<Edit />} circle />
        <ElButton type="success" icon={<Check />} circle />
        <ElButton type="info" icon={<Message />} circle />
        <ElButton type="warning" icon={<Star />} circle />
        <ElButton type="danger" icon={<Delete />} circle />
      </div>
    </div>
  )
}

export default ButtonBasic
