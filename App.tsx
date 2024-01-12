import Bugsnag from '@bugsnag/react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import RootNavigation from './src/navigations/root_navigation'
import ErrorPage from './src/pages/error_page'

Bugsnag.start()

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

export default function App(): React.JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ErrorBoundary>
  )
}
