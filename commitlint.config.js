// commitlint.config.js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 類別限制（Element Plus 風格）
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'build',
        'ci',
        'types',
        'revert'
      ]
    ],

    // type 必須小寫
    'type-case': [2, 'always', 'lower-case'],

    // subject 必須填寫
    'subject-empty': [2, 'never'],

    // subject 必須小寫開頭
    'subject-case': [0],

    // 不允許句點結尾
    'subject-full-stop': [2, 'never', '.'],

    // 允許任何 scope
    'scope-empty': [0],

    // header 最大長度
    'header-max-length': [2, 'always', 100]
  }
}
