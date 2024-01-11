module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/recommended'],
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'import', 'eslint-plugin-no-inline-styles'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
      },
      rules: {
        'no-inline-styles/no-inline-styles': 2,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    },
    'import/ignore': ['react-native']
  },

  rules: {
    quotes: [2, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    'no-console': 2,
    semi: 'off'
  }
}
