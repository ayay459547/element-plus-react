import { useCssVar } from '@/hooks/useCssVar'

type FontSize = {
  level: string
  type: string
}
const fontSizes: FontSize[] = [
  {
    level: 'Supplementary text',
    type: 'extra-small'
  },
  {
    level: 'Body (small)',
    type: 'small'
  },
  {
    level: 'Body',
    type: 'base'
  },
  {
    level: 'Small Title',
    type: 'medium'
  },
  {
    level: 'Title',
    type: 'large'
  },
  {
    level: 'Main Title',
    type: 'extra-large'
  }
]

function formatType(type: string) {
  return type
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}

const ConventionTr: React.FC<{ fontSize: FontSize }> = ({ fontSize }) => {
  const [cssValue] = useCssVar(`--el-font-size-${fontSize.type}`)

  return (
    <tr
      style={{
        fontSize: `var(--el-font-size-${fontSize.type})`
      }}
    >
      <td>{fontSize.level}</td>
      <td>{cssValue + ' ' + formatType(fontSize.type)}</td>
      <td>Build with Element</td>
    </tr>
  )
}

const TypographyConvention: React.FC = () => {
  return (
    <table className="demo-typo-size">
      <tbody>
        <tr>
          <td>Level</td>
          <td>Font Size</td>
          <td className="color-dark-light">Demo</td>
        </tr>
        {fontSizes.map((fontSize, i) => {
          return <ConventionTr key={i} fontSize={fontSize}></ConventionTr>
        })}
      </tbody>
    </table>
  )
}

export default TypographyConvention
