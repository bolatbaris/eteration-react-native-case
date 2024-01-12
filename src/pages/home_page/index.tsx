import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Button, Text, View} from 'react-native'
import {RootStackNavigationProp} from '../../navigations/root_navigation'

export default function HomePage() {
  const navigation = useNavigation<RootStackNavigationProp>()
  return (
    <View>
      <Text>HomePage</Text>
      <Button
        title="Detay git"
        onPress={() => navigation.navigate('DETAIL_PAGE', {id: 'temp'})}
      />
      <Button
        title="Filtre git"
        onPress={() => navigation.navigate('FILTER_PAGE')}
      />
    </View>
  )
}
