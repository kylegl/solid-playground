import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  solid: true,
  typescript: true,
  unocss: true,
  rules: {
    'style/jsx-max-props-per-line': 'off',
    'antfu/consistent-list-newline': 'off',
    'node/prefer-global/process': 'off',
    'style/jsx-newline': ['warn', { prevent: false }],
  },
})
