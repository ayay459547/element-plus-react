import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import styles from './Basic.module.scss'

const ButtonLink: React.FC = () => {
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
      <p>Basic link button</p>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <ElButton className={styles['el-button']} key={button.text} type={button.type} link>
              {button.text}
            </ElButton>
          )
        })}
      </div>

      <p>Disabled link button</p>
      <div className="mb-4">
        {buttons.map((button) => {
          return (
            <ElButton
              className={styles['el-button']}
              key={button.text}
              type={button.type}
              link
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

export default ButtonLink
