import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import rehypeReact from 'rehype-react'
import { copyText } from '@/utils'
import clsx from 'clsx'
import { useId } from 'react'
import styles from './VPCode.module.scss'
import type { VPCodeProps } from './useVPCode.tsx'
import { useVPCode } from './useVPCode.tsx'

const VPCode: React.FC<VPCodeProps> = ({ language, code }) => {
  const {
    elementPlusLightTheme,
    activeTab,
    setActiveTab,
    getLang,
    activeLang,
    activeCode,
    getIcon
  } = useVPCode({
    language,
    code
  })

  const VPCodeId = useId()

  const groupName = `vp-code-${VPCodeId}`

  return (
    <div
      className={clsx(
        styles['vp-adaptive-theme'],
        styles['vp-code-group'],
        styles[`language-${activeLang}`]
      )}
    >
      {Array.isArray(language) && language.length > 0 && (
        <div className={styles['tabs']}>
          {language.map((tab) => {
            const lang = getLang(tab)
            const icon = getIcon(lang)
            const id = `${tab}-${VPCodeId}`

            return (
              <div key={tab}>
                <input
                  type="radio"
                  name={groupName}
                  id={id}
                  checked={activeTab === tab}
                  onChange={() => setActiveTab(tab)}
                ></input>
                <label htmlFor={id} data-title={lang} className={styles['tab-label']}>
                  {icon}
                  {tab}
                </label>
              </div>
            )
          })}
        </div>
      )}

      {/* .md */}
      <div className={styles['blocks']}>
        <div className={clsx(styles['vp-adaptive-theme'], styles['language-shell'])}>
          <button
            title="Copy Code"
            className={styles['copy']}
            onClick={() => copyText(activeCode)}
          ></button>
          <span className={styles['lang']}>{activeLang}</span>

          <SyntaxHighlighter language={activeLang} style={elementPlusLightTheme} PreTag="div">
            {String(activeCode).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

export default VPCode
