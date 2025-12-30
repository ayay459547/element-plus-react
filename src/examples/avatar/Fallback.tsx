import ElAvatar from 'ayay-element-plus-react/components/avatar/ElAvatar.tsx'

const AvatarFallback: React.FC = () => {
  const errorHandler = () => true

  return (
    <div>
      <ElAvatar size={60} src="https://ayay-element-plus-react/empty" onError={errorHandler}>
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </ElAvatar>
    </div>
  )
}

export default AvatarFallback
