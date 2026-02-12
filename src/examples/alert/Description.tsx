import ElAlert from '@ayay459547/element-plus-react/components/alert/ElAlert.tsx'

const AlertDescription: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px' }}>
      <ElAlert title="With description" type="success" description="This is a description." />
    </div>
  )
}

export default AlertDescription
