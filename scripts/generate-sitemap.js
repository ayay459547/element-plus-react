import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_URL = 'https://element-plus-react.chen-chan-hsieh.cc/'

const componentSideNav = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../src/crowdin/pages/component.json'), 'utf-8')
)
const guideSideNav = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../src/crowdin/pages/guide.json'), 'utf-8')
)

const urls = [''] // Home page

// Add guide routes
Object.values(guideSideNav).forEach((section) => {
  section.children.forEach((item) => {
    // item.link already starts with /guide
    urls.push(item.link.startsWith('/') ? item.link.substring(1) : item.link)
  })
})

// Add component routes
Object.values(componentSideNav).forEach((section) => {
  section.children.forEach((item) => {
    urls.push(`component${item.link}`)
  })
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    return `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`
  })
  .join('\n')}
</urlset>`

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap)
console.log('Sitemap generated successfully!')
