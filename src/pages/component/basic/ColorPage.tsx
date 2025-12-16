import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/color.md?raw'

import MainColor from '@/components/globals/MainColor.tsx'
import NeutralColor from '@/components/globals/NeutralColor.tsx'
import SecondaryColors from '@/components/globals/SecondaryColors.tsx'

const ColorPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="Color">Color</h1>
      <p>
        Element Plus uses a specific set of palettes to specify colors to provide a consistent look
        and feel for the products you build.
      </p>

      <h2 id="main-color">Main Color</h2>
      <p>The main color of Element Plus is bright and friendly blue.</p>
      <MainColor />

      <h2 id="secondary-color">Secondary Color</h2>
      <p>
        Besides the main color, you need to use different scene colors in different scenarios (for
        example, dangerous color indicates dangerous operation)
      </p>
      <SecondaryColors />

      <h2 id="neutral-color">Neutral Color</h2>
      <p>
        Neutral colors are for text, background and border colors. You can use different neutral
        colors to represent the hierarchical structure.
      </p>
      <NeutralColor />
    </VPDocContent>
  )
}

export default ColorPage
