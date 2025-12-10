import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import styles from './Basic.module.scss'

const ButtonDisabled: React.FC = () => {
  return (
    <div className={styles['button-example']}>
      <div className={styles['button-row']}>
        <ElButton disabled>Default</ElButton>
        <ElButton type="primary" disabled>
          Primary
        </ElButton>
        <ElButton type="success" disabled>
          Success
        </ElButton>
        <ElButton type="info" disabled>
          Info
        </ElButton>
        <ElButton type="warning" disabled>
          Warning
        </ElButton>
        <ElButton type="danger" disabled>
          Danger
        </ElButton>
      </div>

      <div className={styles['button-row']}>
        <ElButton plain disabled>
          Plain
        </ElButton>
        <ElButton type="primary" disabled plain>
          Primary
        </ElButton>
        <ElButton type="success" disabled plain>
          Success
        </ElButton>
        <ElButton type="info" disabled plain>
          Info
        </ElButton>
        <ElButton type="warning" disabled plain>
          Warning
        </ElButton>
        <ElButton type="danger" disabled plain>
          Danger
        </ElButton>
      </div>
    </div>
  )
}

export default ButtonDisabled
