import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Realtime_Sc from '../Screen/realtime_Sc';
import DrawerContent from './drawercontent';
import Settingsc from '../Screen/Settingsc';
import AboutsSc from '../Screen/AboutsSc';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeSc from '../Screen/HomeSc';

 const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:'#64b0ee'
    }}>
      <Drawer.Navigator
      initialRouteName='Realtime'
      screenOptions={{
      headerShown:false,
      drawerType:'slide',
      overlayColor: 'transparent',
   // swipeEnabled:false,
      sceneContainerStyle: {
      backgroundColor:'transparent',
        },
      drawerStyle: {
          backgroundColor:'transparent',
          width:'50%',
        }
        }}
     //  defaultStatus='close'

      drawerContent={props => { 
        return(
        <DrawerContent
        navigation={props.navigation}
        />
      )}}
      >
           <Drawer.Screen name='Realtime' component={Realtime_Sc}/>
            <Drawer.Screen name='Setting'>
                {props => <Settingsc {...props}/>}
            </Drawer.Screen>
            <Drawer.Screen name='About'>
                {props => <AboutsSc {...props}/>}
            </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})