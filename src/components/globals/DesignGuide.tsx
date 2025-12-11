import clsx from 'clsx'
import styles from './DesignGuide.module.scss'
import ConsistencySvg from './design/ConsistencySvg.tsx'
import ControllabilitySvg from './design/ControllabilitySvg.tsx'
import EfficiencySvg from './design/EfficiencySvg.tsx'
import FeedbackSvg from './design/FeedbackSvg.tsx'

const DesignGuide = () => {
  const cards = [
    {
      text: 'Consistency',
      svg: <ConsistencySvg />
    },
    {
      text: 'Feedback',
      svg: <FeedbackSvg />
    },
    {
      text: 'Efficiency',
      svg: <EfficiencySvg />
    },
    {
      text: 'Controllability',
      svg: <ControllabilitySvg />
    }
  ]

  return (
    <div className="guide-design">
      <div
        className={clsx(styles['el-row'], styles['cards'])}
        style={{ marginLeft: '-7px', marginRight: '-7px' }}
      >
        {cards.map((card) => {
          return (
            <div
              key={card.text}
              className={clsx(
                styles['el-col'],
                styles['el-col-24'],
                styles['el-col-xs-12'],
                styles['el-col-sm-6']
              )}
            >
              <div className={styles['card']}>
                {card.svg}
                <p>{card.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DesignGuide
