import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/guide/installation.md?raw'
import Link from '@/components/common/Link.tsx'
import VPCode from '@/components/common/VPCode.tsx'

const BrowsersTable: React.FC = () => {
  return (
    <div className="vp-table">
      <table>
        <thead>
          <tr>
            <th>version</th>
            <th>
              <img
                src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png"
                alt="Chrome"
              />{' '}
              <br /> Chrome
            </th>
            <th>
              <img
                src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png"
                alt="Edge"
              />{' '}
              <br /> Edge
            </th>
            <th>
              <img
                src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png"
                alt="Firefox"
              />{' '}
              <br /> Firefox
            </th>
            <th>
              <img
                src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png"
                alt="Safari"
              />{' '}
              <br /> Safari
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 2.5.0</td>
            <td>Chrome ≥ 64</td>
            <td>Edge ≥ 79</td>
            <td>Firefox ≥ 78</td>
            <td>Safari ≥ 12</td>
          </tr>
          <tr>
            <td>2.5.0 +</td>
            <td>Chrome ≥ 85</td>
            <td>Edge ≥ 85</td>
            <td>Firefox ≥ 79</td>
            <td>Safari ≥ 14.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const InstallationPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="installation">Installation</h1>

      <h2 id="compatibility">
        Compatibility
        <span className="vp-tag ml-1">2.5.0</span>
      </h2>
      <p>Element Plus React can run on browsers that support last 2 versions.</p>
      <p>
        If you really need to support outdated browsers, please add{' '}
        <Link href="https://babeljs.io/">Babel</Link> and Polyfill yourself.
      </p>
      <p>Since Vue 3 no longer supports IE11, Element Plus React does not support IE either.</p>
      <BrowsersTable />

      <h2 id="sass">Sass</h2>
      <p>
        Version <code>2.8.5</code> and later, the minimum compatible version of{' '}
        <Link href="https://github.com/sass">Sass</Link> is <code>1.79.0</code>.
      </p>
      <p>
        If your terminal prompts <code>legacy JS API Deprecation Warning</code>, you can configure
        the following code in{' '}
        <Link href="https://vitejs.dev/config/shared-options.html#css-preprocessoroptions">
          vite.config.ts
        </Link>
        .
      </p>
      <VPCode
        language={'ts'}
        code={`css: {
  preprocessorOptions: {
    scss: { api: 'modern-compiler' },
  }
}`}
      ></VPCode>

      <h2 id="using-package-manager">Using Package Manager</h2>
      <p>
        <strong>
          We recommend using the package manager (NPM,{' '}
          <Link href="https://classic.yarnpkg.com/lang/en/">Yarn</Link>,{' '}
          <Link href="https://pnpm.io/">pnpm</Link>) to install Element Plus React
        </strong>
        , so that you can utilize bundlers like <Link href="https://vitejs.dev">Vite</Link> and{' '}
        <Link href="https://webpack.js.org/">webpack</Link>.
      </p>
      <p>Choose a package manager you like.</p>
      <VPCode
        language={['npm', 'yarn', 'pnpm']}
        code={{
          npm: 'npm install @ayay459547/element-plus-react',
          yarn: 'yarn add @ayay459547/element-plus-react',
          pnpm: 'pnpm add @ayay459547/element-plus-react'
        }}
      ></VPCode>

      <h2 id="import-in-browser">Import in Browser</h2>
      <p>
        Import Element Plus React through browser HTML tags directly, and use global variable{' '}
        <code>ElementPlus</code>.
      </p>
      <p>
        According to different CDN providers, there are different introduction methods. Here we use{' '}
        <Link href="https://unpkg.com">unpkg</Link> and{' '}
        <Link href="https://jsdelivr.com">jsDelivr</Link> as example. You can also use other CDN
        providers.
      </p>
      <h3 id="unpkg">unpkg</h3>
      <VPCode
        language={'html'}
        code={`<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/@ayay459547/element-plus-react/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/@ayay459547/element-plus-react"></script>
</head>`}
      ></VPCode>
      <h3 id="js-delivr">jsDelivr</h3>
      <VPCode
        language={'html'}
        code={`<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@ayay459547/element-plus-react/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/@ayay459547/element-plus-react"></script>
</head>`}
      ></VPCode>

      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          We recommend using CDN to import Element Plus users to lock the version on the link
          address, so as not to be affected by incompatible updates when Element Plus is upgraded in
          the future. Please check <Link href="https://unpkg.com">unpkg.com</Link> for the method to
          lock the version.
        </p>
        <p>
          Due to the limitations of native HTML parsing behavior, single-closed tags may cause some
          exceptions, so please use double-closed tags,{' '}
          <Link href="https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats">
            reference
          </Link>
        </p>
        <VPCode
          language={'html'}
          code={`<!-- examples -->
<el-table>
  <el-table-column></el-table-column>
  <el-table-column></el-table-column>
</el-table>`}
        ></VPCode>
      </div>
    </VPDocContent>
  )
}

export default InstallationPage
