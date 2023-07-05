import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Buttonlogin from './buttonlogin'
import LoginStyle from './Loginstyle'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
const helo = () =>
{
  console.log('heleo');
}

const loginSc = ({navigation}) => {
  return (
<View
style={{
  backgroundColor:'white',
  flex:1,
  paddingTop:30,
}}>
    <View style={styles.headerlogin}>
          <View style={{backgroundColor:'white',
          height:90,width:'90%',
          marginTop:10,
          marginLeft:5,
          borderBottomEndRadius:100,
          borderRadius:10,
          borderBottomLeftRadius:60,
          borderTopLeftRadius:60,
          flexDirection: 'row',
          alignItems: 'center',
          }}>
            <LoginStyle text="L" color='#f4b2b2' colortext='blue'
            top={30} left={20}
            />
            <LoginStyle text="0" color='#98bacd' colortext='red' 
            top={-15} 
            /> 
            <LoginStyle text="g" color='#bfebb2' colortext='black'  
            left={5} top={20}
            />   
            <LoginStyle text="i" color='#6da8ac' colortext='pink'  
            left={5}
            />   
            <LoginStyle text="N" color='#d78787' colortext='green'  
            top={-15} left={10}
            />         
          </View>
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
            <View style={{
              flexDirection:'row'
            }}>
              <AntDesign name="mail" size={24} color="white" />
              <Text style={styles.textEmailandpassword}>
              Username or Email
            </Text>
          </View>
            
            <TextInput
            placeholder='Type here...'
            maxLength={15}
            style={styles.textinput}
            >
            </TextInput>
          
          </View>
          <View style={{
            marginTop:10,
          }}>
            <View style={{
              flexDirection:'row'
            }}>
              <Entypo name="key" size={24} color="white" />
          <Text style={styles.textEmailandpassword}>
              PassWord
            </Text>
            </View>
            <TextInput
            placeholder='Type here...'
            secureTextEntry
            maxLength={10}
            style={styles.textinput}
            >
            </TextInput>
          </View>
          <View style ={{
            alignItems : 'center',
            marginTop:30,

          }}>
            <Buttonlogin text="Login" color='black' onPress={helo}/>
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
  headerlogin:{
    flex:1,
      backgroundColor:'#869fe4',
      borderBottomEndRadius:140,
      borderBottomColor: '#c2cef2',
      borderBottomStartRadius:70,
      borderTopStartRadius:75,
      borderBottomWidth:8,
  },
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
  },
  textinput: {
    backgroundColor:'#5a5984',
    borderRadius:10,
    padding:5,
  }
})