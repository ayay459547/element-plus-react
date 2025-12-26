import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/badge.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import BadgeBasic from '@/examples/badge/Basic.tsx'
import BadgeCustomize from '@/examples/badge/Customize.tsx'
import BadgeDot from '@/examples/badge/Dot.tsx'
import BadgeMax from '@/examples/badge/Max.tsx'
import BadgeOffset from '@/examples/badge/Offset.tsx'

const BadgePage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="badge">Badge</h1>
      <p>A number or status mark on buttons and icons.</p>

      <h2 id="basic-usage">Basic Usage</h2>
      <p>Displays the amount of new messages.</p>
      <p>The amount is defined with value which accepts Number or String.</p>
      <VPDemo>
        <BadgeBasic />
      </VPDemo>

      <h2 id="max-value">Max Value</h2>
      <p>You can customize the max value.</p>
      <p>
        The max value is defined by property max which is a Number. Note that it only works when
        value is also a Number.
      </p>
      <VPDemo>
        <BadgeMax />
      </VPDemo>

      <h2 id="customizations">Customizations</h2>
      <p>
        Displays text content other than numbers. Or you can use the <code>content</code> slot to
        customize content.
      </p>
      <p>
        When value is a String, it can display customized text. Or use the <code>content</code>{' '}
        slot.
      </p>
      <VPDemo>
        <BadgeCustomize />
      </VPDemo>

      <h2 id="red-dot">Red Dot</h2>
      <p>Use a red dot to mark content that needs to be noticed.</p>
      <p>
        Use the attribute <code>is-dot</code>. It is a Boolean.
      </p>
      <VPDemo>
        <BadgeDot />
      </VPDemo>

      <h2 id="offset">
        Offset
        <span className="vp-tag ml-1">2.7.0</span>
      </h2>
      <p>
        Set offset of the badge dot, the format is [left, top], which represents the offset of the
        status dot from the left and top of the default position.
      </p>
      <VPDemo>
        <BadgeOffset />
      </VPDemo>
    </VPDocContent>
  )
}

export default BadgePage
