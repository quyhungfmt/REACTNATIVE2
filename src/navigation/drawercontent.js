import { View, Text,Image } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import icon from '../../assets/icon.png'
import DrawerItem from './drawerItem'
import styles from '../../components/styles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth } from '../../firebaseConfig'
const DrawerContent = ({navigation}) => {
    
  const [Email,setEmail] = useState('')
    AsyncStorage.getItem('email').then(value => {
    setEmail(value)
  });
     const [ispress,setispress] = useState('')
    const logout = () => {
        AsyncStorage.setItem('login', JSON.stringify(false));
                    navigation.navigate('loginsc')
                    console.log('1')
    }
  return (
    <DrawerContentScrollView
    scrollEnabled={true}
    contentContainerStyle={{
        flex:1,
        marginLeft:10,
    }}
    >
        <View style={{
            flex:1,
            paddingTop:20,
            paddingLeft:10,
            backgroundColor:'transparent',
            borderRadius:10,
        }}>
            <Image source={icon}
            style={{
                height:50,
                width:50,
                borderRadius:5,
            }}>
            </Image>
            <Text style={styles.emailInDrawerContent
            }>Email :  </Text>
            <Text style={styles.emailInDrawerContent}>
            {Email}
            </Text>
            
            <View style={{
                backgroundColor:'white',
                height:2,
                marginVertical:10,
                width:'80%',
                marginLeft:2,
            }}>
            </View>
            <DrawerItem title={"Home"} icon={"home"} ispress={ispress} onPress={() => {
                navigation.navigate('Realtime')
                setispress("Home")
            }}/>
            <DrawerItem title={"Setting"} icon={"setting"} ispress={ispress} onPress={() => {
                navigation.navigate('Setting')
                setispress("Setting")
            }}/>
            <DrawerItem title={"About"} icon={"book"} ispress={ispress} onPress={() => {
                navigation.navigate('About')
                setispress("About")
            }}/>
            <View style={{
                backgroundColor:'white',
                height:2,
                marginVertical:10,
                marginTop:15,
                width:'80%',
                marginLeft:2,
            }}>
            </View>
            <DrawerItem title={"Logout"} icon={"logout"} onPress={() =>
            {
                    logout();
            }}/>

        </View>

    </DrawerContentScrollView>
  )
}

export default DrawerContent;