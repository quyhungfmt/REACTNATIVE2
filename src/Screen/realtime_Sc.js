import { Alert, Animated, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DrawerSceneWrapper from '../navigation/Drawerscreen';






const Realtime_Sc = ({navigation}) => {
  return (
      <DrawerSceneWrapper>
  <View style={{
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
    backgroundColor:'white',
  }}>
    <Text onPress={() => navigation.openDrawer()}>Realtime</Text>
  </View>
</DrawerSceneWrapper>
   
  
  )
}

export default Realtime_Sc

const styles = StyleSheet.create({
  container: {
    flex:1,backgroundColor:"green",
    
  }
})