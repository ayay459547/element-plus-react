import styles from './VPHeroContent.module.scss'

type VPHeroContentProps = {
  children?: React.ReactNode
}

const VPHeroContent: React.FC<VPHeroContentProps> = ({ children }) => {
  return (
    <>
      <div className="hero-content">{children}</div>
      <hr className={styles['el-divider']} />
      <div className="text-center mb-4 mt-4 text-sm text-gray-500">
        <p className="mb-1">
          Open-source UI component library for React
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferer"
            className="px-2"
          >
            MIT License
          </a>
          .
        </p>
        <p className="mt-1">
          ❤️ Based on
          <a
            href="https://github.com/element-plus"
            target="_blank"
            rel="noopener noreferer"
            className="px-2"
          >
            Element Plus
          </a>
          .
        </p>
      </div>
    </>
  )
}

export default VPHeroContent
