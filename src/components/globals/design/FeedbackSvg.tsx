import styles from './FeedbackSvg.module.scss'

const FeedbackSvg: React.FC = () => {
  return (
    <svg
      id="FeedbackSvg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 79 79"
      className="w-20 m-4"
    >
      <circle className={styles['st0']} cx="39.5" cy="39.5" r="39.5" />
      <path
        className={styles['st1']}
        d="M19.8,26.2c0-3.3,2.7-5.9,5.9-5.9h27.7c3.3,0,5.9,2.7,5.9,5.9v23.7c0,3.3-2.7,5.9-5.9,5.9H25.9l-6.2,6.4V26.2z"
      />
      <path
        className={styles['st2']}
        d="M19.8,24.2c0-3.3,2.7-5.9,5.9-5.9h27.7c3.3,0,5.9,2.7,5.9,5.9v23.7c0,3.3-2.7,5.9-5.9,5.9H25.9l-6.2,6.4V24.2z"
      />
      <path
        className={styles['st3']}
        d="M37.5,35.5c0-1.1,0.9-2,2-2s2,0.9,2,2v7.9c0,1.1-0.9,2-2,2s-2-0.9-2-2V35.5z"
      />
      <path
        className={styles['st3']}
        d="M37.5,29.1c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S37.5,30.2,37.5,29.1z"
      />
    </svg>
  )
}

export default FeedbackSvg
