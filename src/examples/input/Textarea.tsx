import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import { useState } from 'react'

const Textarea: React.FC = () => {
  const [textarea, setTextarea] = useState('')

  return (
    <ElInput
      value={textarea}
      onChange={(e) => setTextarea(e.target.value)}
      style={{ width: '240px' }}
      rows={2}
      type="textarea"
      placeholder="Please input"
    />
  )
}

export default Textarea
