module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['transform-remove-console', {exclude: ['error', 'log']}],
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components'
        }
      }
    ]
  ]
}
