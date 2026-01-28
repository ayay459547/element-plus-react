import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import Calendar from '@ayay459547/element-plus-react/icons-svg/calendar.svg?react'
import Search from '@ayay459547/element-plus-react/icons-svg/search.svg?react'
import { useState } from 'react'
import './WithIcon.scss'

const InputWithIcon: React.FC = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')

  return (
    <div className="demo-input-with-icon">
      <div className="input-group">
        <span className="label">Using attributes</span>
        <div className="input-container">
          <ElInput
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="responsive-input"
            placeholder="Pick a date"
            suffixIcon={<Calendar />}
          />
          <ElInput
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="responsive-input"
            placeholder="Type something"
            prefixIcon={<Search />}
          />
        </div>
      </div>
      <div className="input-group">
        <span className="label">Using slots</span>
        <div className="input-container">
          <ElInput
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            className="responsive-input"
            placeholder="Pick a date"
            suffix={
              <ElIcon className="ElInput__icon">
                <Calendar />
              </ElIcon>
            }
          />
          <ElInput
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            className="responsive-input"
            placeholder="Type something"
            prefix={
              <ElIcon className="ElInput__icon">
                <Search />
              </ElIcon>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default InputWithIcon
