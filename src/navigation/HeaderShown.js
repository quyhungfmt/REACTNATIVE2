import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const HeaderShown = ({title,onpress,icon}) => {
  return (
        <View style={{
          backgroundColor:'white',
          flexDirection:'row',
          alignItems: 'center',
          borderRadius:5,
          marginTop:30,
          
        }}>
         
         <TouchableOpacity  onPress={onpress}>
         <View style={{
          width:80,
          height:35,
          marginLeft:10,
         }}>
         <Ionicons name={icon} size={30} color="black" />
         </View>
         </TouchableOpacity>
          <View style={{ height:35}}>
          <Text style={{
            fontSize:20,
            fontWeight:'600',
          }}>
            {title}
          </Text>
          </View>
        </View>
  
  )
}

export default HeaderShown