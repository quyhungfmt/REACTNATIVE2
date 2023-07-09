import { View, Text } from 'react-native'
import React from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseConfig';
const SignInfirebase = (auth,email,password,) => {
  if(email.length == ''){
    console.log('no email');
  }
  else {
    signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uid = user.uid;
        console.log({uid})
        console.log('done signing')
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error signing')
        console.log({email})
        console.log({password})
        console.log({error})
        // ..
      });
    }

}

export default SignInfirebase