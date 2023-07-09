import { Alert, BackHandler, LogBox, StyleSheet, Text, View } from 'react-native';
import loginSc from './src/Screen/loginSc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import Settingsc from './src/Screen/Settingsc';
import CustomDrawer from './src/navigation/CustomDrawer';

const stack = createNativeStackNavigator();
function Mystack (){
  return(
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name='loginsc' component={loginSc} options={{headerShown: false}}/>
      <stack.Screen name='CustomDrawer' component={CustomDrawer} options={{headerShown: false}}/>
    </stack.Navigator>
    </NavigationContainer>
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
  return (
    <Mystack/>
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
