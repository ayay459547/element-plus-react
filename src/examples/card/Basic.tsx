import ElCard from 'ayay-element-plus-react/components/card/ElCard.tsx'

const CardBasic: React.FC = () => {
  return (
    <ElCard
      style={{ maxWidth: '480px' }}
      header={
        <div className="card-header">
          <span>Card name</span>
        </div>
      }
      footer={'Footer content'}
    >
      {Array.from({ length: 4 }, (_, i) => {
        const o = i + 1
        return <p key={o} className="text item">{`List item ${o}`}</p>
      })}
    </ElCard>
  )
}

export default CardBasic
