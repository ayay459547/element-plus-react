import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import rehypeReact from 'rehype-react'
import { copyText } from '@/utils'
import clsx from 'clsx'
import styles from './VPCode.module.scss'

const elementPlusLightTheme = {
  'code[class*="language-"]': {
    color: '#303133', // EP text primary
    background: 'transparent',
    fontFamily: '"Fira Code", monospace',
    fontSize: '14px',
    lineHeight: '1.6',
    textShadow: 'none',
    whiteSpace: 'pre'
  },

  'pre[class*="language-"]': {
    color: '#303133',
    background: '#f5f7fa', // Element Plus light background (gray-100)
    padding: '16px',
    borderRadius: '8px',
    overflow: 'auto',
    border: '1px solid #e4e7ed' // EP border color
  },

  comment: { color: '#909399', fontStyle: 'italic' }, // info text
  string: { color: '#032F62' }, // success
  number: { color: '#E6A23C' }, // warning
  boolean: { color: '#F56C6C' }, // danger
  keyword: { color: '#D73A49' }, // primary
  function: { color: '#6F42C1' }, // regular text
  operator: { color: '#606266' },
  punctuation: { color: '#909399' },
  variable: { color: '#005CC5' },
  parameter: { color: '#005CC5' },

  tag: { color: '#22863A' }, // primary
  className: { color: '#E6A23C' },
  attrName: { color: '#F56C6C' },
  attrValue: { color: '#67C23A' },

  builtin: { color: '#409EFF' }
}

type VPCodeProps = {
  language: string
  code: string
}

const VPCode: React.FC<VPCodeProps> = ({ language, code }) => {
  return (
    <div className={clsx(styles['vp-adaptive-theme'], styles[`language-${language}`])}>
      <button title="Copy Code" className={styles['copy']} onClick={() => copyText(code)}></button>
      <span className={styles['lang']}>{language}</span>

      {/* .md */}
      <SyntaxHighlighter language={language} style={elementPlusLightTheme} PreTag="div">
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}

export default VPCode
