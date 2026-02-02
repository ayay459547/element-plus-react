import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import { useState } from 'react'

const MixedInput: React.FC = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  return (
    <>
      <div>
        <ElInput
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          style={{ minWidth: '600px' }}
          placeholder="Please input"
          prepend="Http://"
        />
      </div>
      <div className="mt-4">
        <ElInput
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          style={{ minWidth: '600px' }}
          placeholder="Please input"
          append=".com"
        />
      </div>
    </>
  )
}

export default MixedInput
