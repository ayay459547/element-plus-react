#!/bin/sh

set -e

# 安裝依賴（鎖定版本）
npm ci

# 打包
npm run build

# 部屬到 Github Pages
npm run gh-pages

echo "✅ Deploy completed"
