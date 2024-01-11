import Bugsnag from '@bugsnag/react-native'
import React from 'react'

import {Text} from 'react-native'
import ErrorPage from './src/error_page'

Bugsnag.start()

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

export default function App(): React.JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Text>App</Text>
    </ErrorBoundary>
  )
}
