import { View, Text } from 'react-native'
import React from 'react'
import DrawerSceneWrapper from '../navigation/Drawerscreen'
import HeaderShown from '../navigation/HeaderShown'

const AboutsSc = ({navigation}) => {
  return (
    <DrawerSceneWrapper>
      <HeaderShown icon={"list"} title={"AboutsSc"} onpress={()=> navigation.toggleDrawer() }>

      </HeaderShown>
      <View style={{
        justifyContent:'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:'red',
      }}>
        <Text onPress={() => navigation.toggleDrawer()}>Historay</Text>
      </View>
    </DrawerSceneWrapper>
  )
}

export default AboutsSc