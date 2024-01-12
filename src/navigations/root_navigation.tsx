import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import FilterPage from '../pages/filter_page'
import ProductDetailPage from '../pages/product_detail_page'
import HomeTab from './home_tab_navigation'

type RootStackParamList = {
  HOME_TAB: undefined
  DETAIL_PAGE: {id: string}
  FILTER_PAGE: undefined
}

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

const Root = createStackNavigator<RootStackParamList>()

export default function RootNavigation() {
  return (
    <Root.Navigator initialRouteName="HOME_TAB">
      <Root.Screen
        name="HOME_TAB"
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Root.Screen name="DETAIL_PAGE" component={ProductDetailPage} />
      <Root.Screen
        name="FILTER_PAGE"
        component={FilterPage}
        options={{presentation: 'modal'}}
      />
    </Root.Navigator>
  )
}
