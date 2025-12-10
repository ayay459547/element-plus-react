import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
// import rehypeReact from 'rehype-react'
import clsx from 'clsx'
import styles from './VPDocContent.module.scss'

interface VPDocContentProps {
  children?: React.ReactNode

  markdown?: string
}

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
    <div className={clsx('doc-content-wrapper', styles['doc-content-wrapper'])}>
      <div className={clsx('doc-content-container', styles['doc-content-container'])}>
        <div className={clsx('doc-content', styles['doc-content'])}>
          {children}

          {/* .md */}
          {markdown && (
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      language={match[1]}
                      style={elementPlusLightTheme}
                      PreTag="div"
                    >
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
          )}
        </div>
      </div>
    </div>
  )
}

export default VPDocContent
