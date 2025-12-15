const BorderShadow: React.FC = () => {
  const getCssVarName = (type: string) => {
    return `--el-box-shadow${type ? '-' : ''}${type}`
  }

  const shadowGroup = [
    {
      name: 'Basic Shadow',
      type: ''
    },
    {
      name: 'Light Shadow',
      type: 'light'
    },
    {
      name: 'Lighter Shadow',
      type: 'lighter'
    },
    {
      name: 'Dark Shadow',
      type: 'dark'
    }
  ]

  return (
    <div className="flex justify-between items-center flex-wrap">
      {shadowGroup.map((shadow, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-center items-center"
            {...{ m: 'auto', w: '46' }}
          >
            <div
              className="inline-flex"
              style={{
                boxShadow: `var(${getCssVarName(shadow.type)})`
              }}
              {...{
                h: '30',
                w: '30',
                m: '2'
              }}
            />
            <span className="demo-shadow-text" {...{ p: 'y-4', text: 'sm' }}>
              {shadow.name}
            </span>
            <code {...{ text: 'xs' }}>{getCssVarName(shadow.type)}</code>
          </div>
        )
      })}
    </div>
  )
}

export default BorderShadow
