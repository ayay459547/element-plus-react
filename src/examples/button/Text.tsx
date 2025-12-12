import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import styles from './Basic.module.scss'

const ButtonText: React.FC = () => {
  const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' }
  ] as const

  return (
    <>
      <p>Basic text button</p>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <ElButton className={styles['el-button']} key={button.text} type={button.type} text>
              {button.text}
            </ElButton>
          )
        })}
      </div>

      <p>Background color always on</p>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <ElButton className={styles['el-button']} key={button.text} type={button.type} text bg>
              {button.text}
            </ElButton>
          )
        })}
      </div>

      <p>Disabled text button</p>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <ElButton
              className={styles['el-button']}
              key={button.text}
              type={button.type}
              text
              disabled
            >
              {button.text}
            </ElButton>
          )
        })}
      </div>
    </>
  )
}

export default ButtonText
