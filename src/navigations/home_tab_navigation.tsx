import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import CartPage from '../pages/cart_page'
import FavoriteListPage from '../pages/favorite_list_page'
import HomePage from '../pages/home_page'
import ProfilePage from '../pages/profile_page'

type TabParamList = {
  HOME_PAGE: undefined
  CART_PAGE: undefined
  FAVORITE_LIST_PAGE: undefined
  PROFILE_PAGE: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME_PAGE" component={HomePage} />
      <Tab.Screen name="CART_PAGE" component={CartPage} />
      <Tab.Screen name="FAVORITE_LIST_PAGE" component={FavoriteListPage} />
      <Tab.Screen name="PROFILE_PAGE" component={ProfilePage} />
    </Tab.Navigator>
  )
}
