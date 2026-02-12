import ElAlert from '@ayay459547/element-plus-react/components/alert/ElAlert.tsx'
import './Basic.scss'

const AlertIconDescription: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <ElAlert title="Primary alert" type="primary" description="More text description" showIcon />
      <ElAlert title="Success alert" type="success" description="More text description" showIcon />
      <ElAlert title="Info alert" type="info" description="More text description" showIcon />
      <ElAlert title="Warning alert" type="warning" description="More text description" showIcon />
      <ElAlert title="Error alert" type="error" description="More text description" showIcon />
    </div>
  )
}

export default AlertIconDescription
