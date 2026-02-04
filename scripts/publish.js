import { execSync } from 'node:child_process'

// 安裝依賴
execSync('npm i', { stdio: 'inherit' })

// 打包
execSync('npm run lib-build', { stdio: 'inherit' })

// 產生 tarball 包
execSync('npm pack', { stdio: 'inherit' })

// 發佈到 NPM
execSync('npm publish --access public --no-git-checks', { stdio: 'inherit' })

console.log('✅ Publish completed')
