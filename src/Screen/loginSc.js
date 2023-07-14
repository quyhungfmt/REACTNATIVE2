import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Buttonlogin from '../datacustom/buttonlogin'
import LoginStyle from '../datacustom/Loginstyle'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
import SignInfirebase from '../datacustom/Signinfirebase'
import styles from '../../components/styles/styles'
import { getAuth } from 'firebase/auth'

const loginSc =  ({navigation}) => {
  const [PassWord, setpassword] = useState('');
  const [Email, setEmail] = useState('');
  const [showpass, setshowpass] = useState(true);
  const auth = getAuth();
  


  const loginfirebase = () =>{
  if(Email.length == 0)
      {
        console.log('Please enter')
      }
      else{
        {
          SignInfirebase(auth,Email,PassWord,{navigation});
        }
      }
    }
    
  return (
<View
style={{
  backgroundColor:'white',
  flex:1,
  paddingTop:30,
}}>
    <View style={styles.headerlogin}>
          <View style={styles.headerlogin1}>
            <LoginStyle text="L" color='#f4b2b2' colortext='blue'
            top={-10} left={20}
            />
            <LoginStyle text="0" color='#98bacd' colortext='red' 
            top={-15} left={10}
            /> 
            <LoginStyle text="g" color='#bfebb2' colortext='black'  
            left={5} top={15}
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
      marginTop:10,
      backgroundColor:'#cdc0c0',
      borderTopRightRadius:90,
      borderTopLeftRadius:90,
    }}>
      <View style={{
        flex:1,
        marginTop:50,
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
        backgroundColor:'#afa7a7',
        }}>
          <View style={{
        flex:1,
        marginTop:50,
        borderTopRightRadius:150,
        borderTopLeftRadius:70,
        backgroundColor:'#090641',
        borderBottomLeftRadius:150
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
            <View style={{
              backgroundColor:'#5a5984',
              borderRadius:10,
            }}>
            <TextInput
            placeholder='Type here...'
            maxLength={15}
            style={styles.textinput}
            value = {Email}
            onChangeText={setEmail}
            >
            </TextInput>
          </View>
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
            <View style={{
              flexDirection:'row', backgroundColor:'#5a5984',alignItems:'center',borderRadius:10,
            }}>
            <TextInput
            placeholder='Type here...'
            secureTextEntry={showpass}
            value={PassWord}
            maxLength={10}
            style={styles.textinput}
            onChangeText={setpassword}
            >
            </TextInput>
            <Ionicons name={showpass? 'eye-off' : 'eye'} size={20} color="black" onPress={() => setshowpass((prev) => !prev)} />
            </View>
          </View>
          <View style ={{
            alignItems : 'center',
            marginTop:30,

          }}>
            <Buttonlogin text="Login" color='black' onPress={()=> {
              loginfirebase();
            }}/>
          </View>
          </View>
        </View>
        </View>
        
     </View>
    
        
</View>



  )
}

export default loginSc

