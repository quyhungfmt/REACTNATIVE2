import { View, Text } from 'react-native'
import React from 'react'

const HomeSc = ({navigation}) => {
  return (
    <View style={{backgroundColor:'blue', flex:1, alignItems:"center", justifyContent:'center'}}>
      <Text onPress={() =>navigation.toggleDrawer()}>HomeSc</Text>
    </View>
  )
}

export default HomeSc