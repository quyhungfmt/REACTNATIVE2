import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Realtime_Sc from './realtime_Sc';
import HeaderShown from '../navigation/HeaderShown';
import DrawerSceneWrapper from '../navigation/Drawerscreen';

export default function Settingsc({navigation})  {
  return (
    <DrawerSceneWrapper>
    <View style={{
      justifyContent:'center',
      alignItems: 'center',
      flex:1,
    }}>
      <Text onPress={() => navigation.openDrawer()}>Settingsc</Text>
    </View>
  </DrawerSceneWrapper>
  )
}

const styles = StyleSheet.create({
  contariner:{
    flex:1,
    backgroundColor:"white"
  }
})