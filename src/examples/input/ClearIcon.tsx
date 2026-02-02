import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import CloseBold from '@ayay459547/element-plus-react/icons-svg/close-bold.svg?react'
import { useState } from 'react'

const InputClearIcon: React.FC = () => {
  const [input, setInput] = useState('Custom clear icon')

  return (
    <ElInput
      value={input}
      onChange={(e) => setInput(e.target.value)}
      clearable
      clearIcon={<CloseBold />}
      placeholder="Custom clear icon"
    />
  )
}

export default InputClearIcon
