import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/empty.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import EmptyBasicUsage from '@/examples/empty/BasicUsage.tsx'
import EmptyBasicUsage_code from '@/examples/empty/BasicUsage.tsx?raw'

import EmptyBottomContent from '@/examples/empty/BottomContent.tsx'
import EmptyBottomContent_code from '@/examples/empty/BottomContent.tsx?raw'

import EmptyCustomImage from '@/examples/empty/CustomImage.tsx'
import EmptyCustomImage_code from '@/examples/empty/CustomImage.tsx?raw'

import EmptyImageSize from '@/examples/empty/ImageSize.tsx'
import EmptyImageSize_code from '@/examples/empty/ImageSize.tsx?raw'

const EmptyPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="empty">Empty</h1>
      <p>Placeholder hints for empty states.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <VPDemo
        link="/src/examples/empty/BasicUsage.tsx"
        code={<VPCode language="tsx" code={EmptyBasicUsage_code} />}
      >
        <EmptyBasicUsage />
      </VPDemo>

      <h2 id="custom-image">Custom image</h2>
      <p>
        Use <code>image</code> prop to set image URL.
      </p>
      <VPDemo
        link="/src/examples/empty/CustomImage.tsx"
        code={<VPCode language="tsx" code={EmptyCustomImage_code} />}
      >
        <EmptyCustomImage />
      </VPDemo>

      <h2 id="image-size">Image size</h2>
      <p>
        Use <code>image-size</code> prop to control image size.
      </p>
      <VPDemo
        link="/src/examples/empty/ImageSize.tsx"
        code={<VPCode language="tsx" code={EmptyImageSize_code} />}
      >
        <EmptyImageSize />
      </VPDemo>

      <h2 id="bottom-content">Bottom content</h2>
      <p>Use the default slot to insert content at the bottom.</p>
      <VPDemo
        link="/src/examples/empty/BottomContent.tsx"
        code={<VPCode language="tsx" code={EmptyBottomContent_code} />}
      >
        <EmptyBottomContent />
      </VPDemo>

      <h2 id="custom-styles">Custom styles</h2>
      <p>
        Now you can set custom style for empty component. Use <code>css/scss</code> language to
        change the global or local color. We set some global color variables:{' '}
        <code>--el-empty-fill-color-0</code>, <code>--el-empty-fill-color-1</code>,{' '}
        <code>--el-empty-fill-color-2</code>, ......, <code>--el-empty-fill-color-9</code>. You can
        use like:{' '}
        <code>:root {'{ --el-empty-fill-color-0: red; --el-empty-fill-color-1: blue; }'}</code>. But
        usually, if you want to change style, you need to change all color, because these colors are
        a combination.
      </p>
    </VPDocContent>
  )
}

export default EmptyPage
