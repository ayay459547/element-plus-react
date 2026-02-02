import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import { useState } from 'react'

const LengthLimiting: React.FC = () => {
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')

  return (
    <>
      <ElInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '240px' }}
        maxlength="10"
        placeholder="Please input"
        showWordLimit
        type="text"
      />
      <ElInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '240px' }}
        className="ml-4"
        maxlength="10"
        placeholder="Please input"
        showWordLimit
        wordLimitPosition="outside"
        type="text"
      />
      <div style={{ margin: '20px 0' }} />
      <ElInput
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
        style={{ width: '240px' }}
        maxlength="30"
        placeholder="Please input"
        showWordLimit
        type="textarea"
      />
      <ElInput
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
        style={{ width: '240px' }}
        className="ml-4"
        maxlength="30"
        placeholder="Please input"
        showWordLimit
        wordLimitPosition="outside"
        type="textarea"
      />
    </>
  )
}

export default LengthLimiting
