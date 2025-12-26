import ElCard from '@ayay/element-plus-react/components/card/ElCard.tsx'

const CardShadow: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <ElCard style={{ width: '480px' }} shadow="always">
        Always
      </ElCard>
      <ElCard style={{ width: '480px' }} shadow="hover">
        Hover
      </ElCard>
      <ElCard style={{ width: '480px' }} shadow="never">
        Never
      </ElCard>
    </div>
  )
}

export default CardShadow
