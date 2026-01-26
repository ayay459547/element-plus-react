import styles from './ControllabilitySvg.module.scss'

const ControllabilitySvg: React.FC = () => {
  return (
    <svg
      id="ControllabilitySvg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 79 79"
      className="w-20 m-4"
    >
      <circle className={styles['st0']} cx="39.5" cy="39.5" r="39.5" />
      <g>
        <defs>
          <rect id="SVGID_1_" x="15.8" y="17.3" width="47.4" height="43.9" />
        </defs>
        <clipPath id="SVGID_00000103965616648291865560000002216192073450902938_">
          <use style={{ overflow: 'visible' }} />
        </clipPath>
        <g style={{ clipPath: 'url(#SVGID_00000103965616648291865560000002216192073450902938_)' }}>
          <path
            className={styles['st2']}
            d="M57.3,23.2L57.3,23.2c0.5,0,1,0.4,1,1v36c0,0.5-0.4,1-1,1l0,0c-0.5,0-1-0.4-1-1v-36
        C56.3,23.6,56.7,23.2,57.3,23.2z"
          />
          <ellipse className={styles['st3']} cx="57.3" cy="24.7" rx="5.9" ry="5.9" />
          <ellipse className={styles['st4']} cx="57.3" cy="23.2" rx="5.9" ry="5.9" />
          <path
            className={styles['st2']}
            d="M21.7,17.3L21.7,17.3c0.5,0,1,0.4,1,1v36c0,0.5-0.4,1-1,1h0c-0.5,0-1-0.4-1-1v-36
        C20.7,17.7,21.2,17.3,21.7,17.3z"
          />
          <ellipse className={styles['st3']} cx="21.7" cy="55.3" rx="5.9" ry="5.9" />
          <ellipse className={styles['st4']} cx="21.7" cy="53.8" rx="5.9" ry="5.9" />
          <path
            className={styles['st2']}
            d="M39.5,17.3L39.5,17.3c0.5,0,1,0.4,1,1v42c0,0.5-0.4,1-1,1l0,0c-0.5,0-1-0.4-1-1v-42
        C38.5,17.7,39,17.3,39.5,17.3z"
          />
          <ellipse className={styles['st5']} cx="39.5" cy="39" rx="5.9" ry="5.9" />
          <ellipse className={styles['st6']} cx="39.5" cy="37.5" rx="5.9" ry="5.9" />
        </g>
      </g>
    </svg>
  )
}

export default ControllabilitySvg
