module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    requireConfigFile: false
  },

  extends: ['eslint-config-prettier']
}
