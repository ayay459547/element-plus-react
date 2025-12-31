import { execSync } from 'node:child_process'

// 安裝依賴
execSync('npm i', { stdio: 'inherit' })

// 打包 + 部屬到 Github Pages
execSync('npm run page-deploy', { stdio: 'inherit' })

console.log('✅ Deploy completed')
