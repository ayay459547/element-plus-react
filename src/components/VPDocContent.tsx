import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import styles from './VPDocContent.module.scss'

interface VPDocContentProps {
  markdown: string
  children?: React.ReactNode
}

// const elementPlusPrismTheme = {
//   'code[class*="language-"]': {
//     color: '#dcdfe6', // EP text color
//     background: 'transparent',
//     fontFamily: '"Fira Code", monospace',
//     fontSize: '14px',
//     lineHeight: '1.6',
//     textShadow: 'none',
//     whiteSpace: 'pre'
//   },

//   'pre[class*="language-"]': {
//     color: '#dcdfe6',
//     background: '#1e1e20', // Element Plus 深色背景
//     padding: '16px',
//     borderRadius: '8px',
//     overflow: 'auto',
//     border: '1px solid #2c2c2c'
//   },

//   comment: { color: '#909399' }, // EP: text-secondary
//   string: { color: '#f4d19b' }, // 類似 EP highlight 文字
//   number: { color: '#85ce61' }, // EP success
//   boolean: { color: '#409eff' }, // EP primary
//   keyword: { color: '#f56c6c' }, // EP danger
//   function: { color: '#e6a23c' }, // EP warning
//   operator: { color: '#dcdfe6' },
//   punctuation: { color: '#c0c4cc' },
//   className: { color: '#67c23a' }, // EP success 亮色
//   tag: { color: '#409eff' }, // EP primary
//   attrName: { color: '#e6a23c' }, // EP warning
//   attrValue: { color: '#f4d19b' },
//   builtin: { color: '#67c23a' }
// }

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

const VPDocContent: React.FC<VPDocContentProps> = ({ children, markdown }) => {
  return (
    <div className={styles['doc-content-wrapper']}>
      <div className={styles['doc-content-container']}>
        <div className={styles['doc-content']}>
          {/* 暫時 */}
          {children}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  // background-color: var(--vp-code-block-bg);
                  <SyntaxHighlighter language={match[1]} style={elementPlusLightTheme} PreTag="div">
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default VPDocContent
