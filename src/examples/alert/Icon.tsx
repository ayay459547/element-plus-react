import ElAlert from '@ayay459547/element-plus-react/components/alert/ElAlert.tsx'
import Bell from '@ayay459547/element-plus-react/icons-svg/bell.svg?react'
import './Basic.scss'

const AlertIcon: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <ElAlert title="Primary alert" type="primary" showIcon />
      <ElAlert title="Success alert" type="success" showIcon />
      <ElAlert title="Info alert" type="info" showIcon />
      <ElAlert title="Warning alert" type="warning" showIcon />
      <ElAlert title="Error alert" type="error" showIcon />
      <ElAlert title="Error alert" type="error" showIcon icon={<Bell />} />
    </div>
  )
}

export default AlertIcon
