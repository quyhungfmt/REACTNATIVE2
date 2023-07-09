import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import icon from '../../assets/icon.png'
import {auth} from '../../firebaseConfig'
import DrawerItem from './drawerItem'
import styles from '../../components/styles/styles'
import { signOut } from 'firebase/auth'
const DrawerContent = ({navigation}) => {
    const Email = auth.currentUser.email;
    const [ispress,setispress] = useState('')
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
                signOut(auth).then(() => {
                    console.log('logout completed')
                  }).catch((error) => {
                    // An error happened.
                  });
            }}/>

        </View>

    </DrawerContentScrollView>
  )
}

export default DrawerContent;