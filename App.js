import { Alert, BackHandler, LogBox, StyleSheet, Text, View } from 'react-native';
import loginSc from './src/Screen/loginSc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import CustomDrawer from './src/navigation/CustomDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyStack1 from './src/navigation/MyStack1';
import Task from './src/datacustom/Realtime/taskrealtime';



const stack = createNativeStackNavigator();
function Mystack (){
  
  return(
  
    <stack.Navigator>
      <stack.Screen name='loginsc' component={loginSc} options={{headerShown: false}}/>
      <stack.Screen name='CustomDrawer' component={CustomDrawer} options={{headerShown: false}}/>
    </stack.Navigator>
   
  );
}

export default function App() {
  LogBox.ignoreAllLogs();   // tắt cảnh báo yellow-box
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const[islogin,setlogin] = useState(false);
  console.log({islogin})
  const _data = async () => {
    try {
      const data = await AsyncStorage.getItem('login')
      setlogin(data);
    }
    catch(error)
    {

    }
  }
  useEffect(() => {_data()})
  return (
    <NavigationContainer>
      {islogin === "false"?  <Mystack/> : <MyStack1/>}
     
    </NavigationContainer>
    // <Task/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
