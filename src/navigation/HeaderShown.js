import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const HeaderShown = ({title,onpress,icon}) => {
  return (
        <SafeAreaView style={{
          backgroundColor:'#fcfcfa',
          flexDirection:'row',
          alignItems: 'center',
          borderRadius:10,
          marginTop:30,
        }}>
         
         <TouchableOpacity  onPress={onpress}>
         <View style={{
          width:80,
          height:40,
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
        </SafeAreaView>
  
  )
}

export default HeaderShown