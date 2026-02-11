import ElAlert from '@ayay459547/element-plus-react/components/alert/ElAlert.tsx'
import './Basic.scss'

const AlertBasic: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <ElAlert title="Primary alert" type="primary" />
      <ElAlert title="Success alert" type="success" />
      <ElAlert title="Info alert" type="info" />
      <ElAlert title="Warning alert" type="warning" />
      <ElAlert title="Error alert" type="error" />
    </div>
  )
}

export default AlertBasic
