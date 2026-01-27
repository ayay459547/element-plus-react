import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import { useState } from 'react'

const InputBasicUsage: React.FC = () => {
  const [input, setInput] = useState('')

  return (
    <ElInput
      value={input}
      onChange={(e) => setInput(e.target.value)}
      style={{ width: '240px' }}
      placeholder="Please input"
    />
  )
}

export default InputBasicUsage
