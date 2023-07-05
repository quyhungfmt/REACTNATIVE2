import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const loginSc = ({navigation}) => {
  return (
<View
style={{
  backgroundColor:'white',
  flex:1,
  paddingTop:30,
}}>
    <View style={{
      flex:1,
      width:'75%',
      backgroundColor:'blue',
      alignItems:'center',
      justifyContent: 'center',
      borderBottomEndRadius:140,
      borderBottomColor: '#a49c9c',
      borderBottomStartRadius:70,
      borderTopStartRadius:15,
      borderBottomWidth:5,
      }}>
      <Text style={styles.textlogin}>Login</Text>
    </View>
      <View style={{
        flex:5,
        marginTop:20,
      backgroundColor:'#cdc0c0',
      borderTopRightRadius:90,
      borderTopLeftRadius:90,
    }}>
      <View style={{
        flex:1,
        marginTop:60,
      borderTopRightRadius:100,
      borderTopLeftRadius:100,
          backgroundColor:'#afa7a7',
        }}>
          <View style={{
        flex:1,
        marginTop:60,
      borderTopRightRadius:100,
      borderTopLeftRadius:100,
          backgroundColor:'#090641',
        }}>
          <View style={{
            padding:30,
            marginTop:50,
          }}>
          
          <View>
            <Text style={styles.textEmailandpassword}>
              Username or Email
            </Text>
            <TextInput
            placeholder='Type here...'
            maxLength={15}
            style={{
              backgroundColor:'#5a5984',
            }}
            >
            </TextInput>
           
          </View>
          <View style={{
            marginTop:20,
          }}>
          <Text style={styles.textEmailandpassword}>
              PassWord
            </Text>
            <TextInput
            placeholder='Type here...'
            secureTextEntry
            maxLength={10}
            style={{
              backgroundColor:'#5a5984',
            }}
            >
            </TextInput>
          </View>
          <View>
            <TouchableOpacity>
              
              <Text style={{
                color:'white'
              }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        </View>
        
     </View>
    
        
</View>



  )
}

export default loginSc

const styles = StyleSheet.create({
  textlogin: {
    color:'white',
    fontSize : 32,
    paddingRight:80,
    fontWeight: 'bold',
  },
  textEmailandpassword: {
    fontSize:16,
    fontWeight: 'bold',
    color: 'white',
  }
})