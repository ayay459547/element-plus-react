import ElAlert from '@ayay459547/element-plus-react/components/alert/ElAlert.tsx'
import './Basic.scss'

const AlertCloseButton: React.FC = () => {
  const hello = () => {
    alert('Hello World!')
  }

  return (
    <div style={{ maxWidth: '600px' }}>
      <ElAlert title="Unclosable alert" type="success" closable={false} />
      <ElAlert title="Customized close text" type="info" closeText="Gotcha" />
      <ElAlert title="Alert with callback" type="warning" onClose={hello} />
    </div>
  )
}

export default AlertCloseButton
