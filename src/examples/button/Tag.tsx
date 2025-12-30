import ElButton from 'ayay-element-plus-react/components/button/ElButton.tsx'

const ButtonTag: React.FC = () => {
  return (
    <>
      <ElButton>button</ElButton>
      <ElButton tag="div" role="button" tabIndex={0}>
        div
      </ElButton>
      <ElButton
        type="primary"
        tag="a"
        href="https://github.com/element-plus/element-plus"
        target="_blank"
        rel="noopener noreferrer"
      >
        a
      </ElButton>
    </>
  )
}

export default ButtonTag
