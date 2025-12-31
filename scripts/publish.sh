#!/bin/sh

set -e

# 安裝依賴（鎖定版本）
npm ci

# 打包
npm run lib-build

# 產生 tarball 包
npm pack

# 發佈到 NPM
npm publish --access public --no-git-checks

echo "✅ Publish completed"
