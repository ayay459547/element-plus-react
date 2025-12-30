import ElCard from 'ayay-element-plus-react/components/card/ElCard.tsx'

const CardWithImages: React.FC = () => {
  return (
    <ElCard style={{ maxWidth: '480px' }} header={'Yummy hamburger'}>
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        style={{ width: '100%' }}
      />
    </ElCard>
  )
}

export default CardWithImages
