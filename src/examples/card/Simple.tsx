import ElCard from '@ayay459547/element-plus-react/components/card/ElCard.tsx'

const CardSimple: React.FC = () => {
  return (
    <ElCard style={{ maxWidth: '480px' }}>
      {Array.from({ length: 4 }, (_, i) => {
        const o = i + 1
        return <p key={o} className="text item">{`List item ${o}`}</p>
      })}
    </ElCard>
  )
}

export default CardSimple
