module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: 3
      }
    ],
    'vue/name-property-casing': ['error', 'kebab-case']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
