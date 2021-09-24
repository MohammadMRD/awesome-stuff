module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: {
    "jest/globals": true
  },
}
