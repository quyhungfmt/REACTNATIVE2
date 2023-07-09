import { View, Text } from 'react-native'
import React from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from '../firebaseConfig';
const Signupfirebase = (auth,email,password) => {
  
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        console.log('done sign up')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error sign up')
        console.log({email})
        console.log({password})
        console.log({error})
        // ..
      });

}

export default Signupfirebase