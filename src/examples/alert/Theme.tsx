import ElAlert from '@ayay459547/element-plus-react/components/alert/ElAlert.tsx'
import './Basic.scss'

const AlertTheme: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <ElAlert title="Primary alert" type="primary" effect="dark" />
      <ElAlert title="Success alert" type="success" effect="dark" />
      <ElAlert title="Info alert" type="info" effect="dark" />
      <ElAlert title="Warning alert" type="warning" effect="dark" />
      <ElAlert title="Error alert" type="error" effect="dark" />
    </div>
  )
}

export default AlertTheme
