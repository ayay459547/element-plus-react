# @ayay/element-plus-react

Use Element Plus as a reference for creating a React UI framework.

## commit message

- feat:
  - Add new components, introduce new features, or add APIs to existing components.
  - 新增元件、加入新功能，或對現有元件新增 API。
  - 新增组件、加入新功能，或对现有组件新增 API。

- fix:
  - Fix bugs in components, styles, or correct unexpected behavior.
  - 修復元件、樣式或非預期行為的錯誤。
  - 修复组件、样式或非预期行为的错误。

- docs:
  - Update documentation, examples, guides, or translations.
  - 更新文件、範例、指引或翻譯。
  - 更新文档、示例、指引或翻译。

- style:
  - Code style changes that do not affect logic (spacing, formatting, missing semicolons, etc.).
  - 程式碼風格變更，不影響程式邏輯（空格、格式化、缺少分號等）。
  - 代码风格变更，不影响程序逻辑（空格、格式化、缺少分号等）。

- refactor:
  - Refactor code without adding features or fixing bugs (structure or logic improvements).
  - 重構程式碼，但不新增功能也不修復 bug（改善結構或程式邏輯）。
  - 重构代码，但不新增功能也不修复 bug（改善结构或程序逻辑）。

- perf:
  - Improve performance, such as reducing re-renders or optimizing rendering logic.
  - 提升效能，例如減少重繪或優化渲染邏輯。
  - 提升性能，例如减少重绘或优化渲染逻辑。

- test:
  - Add or update unit tests or E2E tests.
  - 新增或更新單元測試或 E2E 測試。
  - 新增或更新单元测试或 E2E 测试。

- chore:
  - Changes to project configurations or tooling (dependencies, scripts, CI/CD).
  - 專案配置或工具的變更（依賴、腳本、CI/CD 等）。
  - 项目配置或工具的变更（依赖、脚本、CI/CD 等）。

- build:
  - Modifications related to the build system (Vite, Rollup, TypeScript configs).
  - 與建置系統相關的修改（Vite、Rollup、TypeScript 設定）。
  - 与构建系统相关的修改（Vite、Rollup、TypeScript 配置）。

- ci:
  - Update continuous integration settings (GitHub Actions, pipelines, etc.).
  - 更新持續整合（CI）設定（GitHub Actions、Pipeline 等）。
  - 更新持续集成（CI）设置（GitHub Actions、Pipeline 等）。

- types:
  - Update or fix TypeScript type definitions.
  - 更新或修正 TypeScript 型別定義。
  - 更新或修正 TypeScript 类型定义。

- revert:
  - Revert a previous commit.
  - 撤回先前的 commit。
  - 撤回先前的 commit。

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
      // other options...
    }
  }
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
      // other options...
    }
  }
])
```
