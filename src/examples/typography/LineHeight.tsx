import { isDark } from '@/composables/dark'
import { withBase } from '@/utils'

const TypographyLineHeight: React.FC = () => {
  return (
    <div>
      {isDark ? (
        <img className="lineH-left" src={withBase('/images/typography/line-height-dark.png')} />
      ) : (
        <img className="lineH-left" src={withBase('/images/typography/line-height.png')} />
      )}

      <ul className="lineH-right">
        <li>
          line-height:1 <span>No line height</span>
        </li>
        <li>
          line-height:1.3 <span>Compact</span>
        </li>
        <li>
          line-height:1.5 <span>Regular</span>
        </li>
        <li>
          line-height:1.7 <span>Loose</span>
        </li>
      </ul>
    </div>
  )
}

export default TypographyLineHeight
