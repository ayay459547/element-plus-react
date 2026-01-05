import { isDark } from '@/composables/dark'
import { withBase } from '@/utils'
import styles from './Font.module.scss'

const TypographyFont: React.FC = () => {
  return !isDark ? (
    <div className={styles['demo-term-box']}>
      <img src={withBase('/images/typography/term-pingfang.png')} alt="" />
      <img src={withBase('/images/typography/term-hiragino.png')} alt="" />
      <img src={withBase('/images/typography/term-microsoft.png')} alt="" />
      <img src={withBase('/images/typography/term-helvetica.png')} alt="" />
      <img src={withBase('/images/typography/term-arial.png')} alt="" />
    </div>
  ) : (
    <div className={styles['demo-term-box']}>
      <img src={withBase('/images/typography/term-pingfang-dark.png')} alt="" />
      <img src={withBase('/images/typography/term-hiragino-dark.png')} alt="" />
      <img src={withBase('/images/typography/term-microsoft-dark.png')} alt="" />
      <img src={withBase('/images/typography/term-helvetica-dark.png')} alt="" />
      <img src={withBase('/images/typography/term-arial-dark.png')} alt="" />
    </div>
  )
}

export default TypographyFont
