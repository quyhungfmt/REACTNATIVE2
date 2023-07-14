import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Keychain from 'react-native-keychain';
import {signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignInfirebase = async (auth,email,password,{navigation}) => {

  if(email.length == ''){
    console.log('no email');
  }
   else if(password.length == ''){
    console.log('no password');
  }
  else {
    signInWithEmailAndPassword(auth,email,password)
      .then( (userCredential) => {
        // // Signed in
        navigation.navigate('CustomDrawer')
        AsyncStorage.setItem('login', JSON.stringify(true));
        AsyncStorage.setItem('email', JSON.stringify(email))
        AsyncStorage.setItem('pass', JSON.stringify(password))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error login')
        console.log(error)
      });
    }

}

export default SignInfirebase