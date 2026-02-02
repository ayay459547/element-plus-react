import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import Search from '@ayay459547/element-plus-react/icons-svg/search.svg?react'
import { useState } from 'react'

const VariousSize: React.FC = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')

  return (
    <>
      <div className="flex gap-4 mb-4 items-center">
        <ElInput
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
        />
        <ElInput
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          style={{ width: '240px' }}
          placeholder="Please Input"
        />
        <ElInput
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
        />
      </div>

      <div className="flex gap-4 mb-4 items-center">
        <ElInput
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
          suffixIcon={<Search />}
        />
        <ElInput
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          style={{ width: '240px' }}
          placeholder="Please Input"
          suffixIcon={<Search />}
        />
        <ElInput
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
          suffixIcon={<Search />}
        />
      </div>

      <div className="flex gap-4 mb-4 items-center">
        <ElInput
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
          prefixIcon={<Search />}
        />
        <ElInput
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          style={{ width: '240px' }}
          placeholder="Please Input"
          prefixIcon={<Search />}
        />
        <ElInput
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
          prefixIcon={<Search />}
        />
      </div>
    </>
  )
}

export default VariousSize
