module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'standard'
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
    "no-alert": 1,
    "no-var": 1,
    "no-multi-spaces": 1//不能用多余的空格
  }
}
