import ElAlert from '@ayay459547/element-plus-react/components/alert/ElAlert.tsx'
import './Basic.scss'

const AlertCenter: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <ElAlert title="Primary alert" type="primary" center showIcon />
      <ElAlert title="Success alert" type="success" center showIcon />
      <ElAlert title="Info alert" type="info" center showIcon />
      <ElAlert title="Warning alert" type="warning" center showIcon />
      <ElAlert title="Error alert" type="error" center showIcon />
    </div>
  )
}

export default AlertCenter
