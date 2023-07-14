import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomDrawer from './CustomDrawer';
import loginSc from '../Screen/loginSc';

const MyStack1 = () => {
    const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen name='CustomDrawer' component={CustomDrawer} options={{headerShown: false}}/>
      <stack.Screen name='loginsc' component={loginSc} options={{headerShown: false}}/>
    </stack.Navigator>
  )
}

export default MyStack1