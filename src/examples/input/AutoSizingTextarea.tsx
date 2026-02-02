import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import { useState } from 'react'

const AutoSizingTextarea: React.FC = () => {
  const [textarea1, setTextarea1] = useState('')
  const [textarea2, setTextarea2] = useState('')

  return (
    <>
      <ElInput
        value={textarea1}
        onChange={(e) => setTextarea1(e.target.value)}
        style={{ width: '240px' }}
        autosize
        type="textarea"
        placeholder="Please input"
      />
      <div style={{ margin: '20px 0' }} />
      <ElInput
        value={textarea2}
        onChange={(e) => setTextarea2(e.target.value)}
        style={{ width: '240px' }}
        autosize={{ minRows: 2, maxRows: 4 }}
        type="textarea"
        placeholder="Please input"
      />
    </>
  )
}

export default AutoSizingTextarea
