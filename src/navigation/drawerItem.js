import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const DrawerItem = ({title, icon,onPress,ispress}) => {
  return (
    <TouchableOpacity style={{
        flexDirection:'row',
        height:50,
        alignItems:'center',
        width:'70%',
        backgroundColor: ispress == title ? 'blue' : 'white',
        borderRadius:10,
        marginTop:6,
        justifyContent:'center',
    }} onPress={onPress}>
        <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        }}>
        <AntDesign name={icon} size={24} color={ ispress == title ? 'white' : 'black'} />
        <Text style={{
            paddingLeft:10,
            color: ispress == title ? 'white' : 'black'
        }}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default DrawerItem