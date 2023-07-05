import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import loginSc from './src/loginSc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const stack = createNativeStackNavigator();
function Mystack (){
  return(
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen
      name='loginsc' 
      component={loginSc}
      options={{headerShown: false}}/>
    </stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  LogBox.ignoreAllLogs();   // tắt cảnh báo yellow-box
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
