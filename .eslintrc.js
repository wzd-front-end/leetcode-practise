module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'indent': ['error', 2], // 强制使用一致的缩进
    'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
    'semi': 0, // 要求或禁止使用分号代替 ASI
    'quotes': [2, 'single'],  // 强制使用一致的反勾号、双引号或单引号
    "no-multi-spaces": 1//不能用多余的空格
  }
}

