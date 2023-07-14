import { Alert,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DrawerSceneWrapper from '../navigation/Drawerscreen';
import { AntDesign } from '@expo/vector-icons';
import Task from '../datacustom/Realtime/taskrealtime';



const Realtime_Sc = ({navigation}) => {
  const [list,setlist] = useState([])
  const [token,setToken] = useState('module')
  // const token = 'eh'
  const [onpressin , setonpressin] = useState(false);
  const [onadd , setonadd] = useState(false);
  const addModule = (lisenew) => {
    setlist([...list,lisenew]);
  }
  const add = () => {
    Alert.alert('Add module','Vui long nhap ma so module', 
    [
      {
        text: 'add',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => null},
    ]);
    return true;
  };

  return (
    <DrawerSceneWrapper title={'Home'}>
  <View style={styles.container}>
  <View style={styles.input}>
    <TextInput style={{
      backgroundColor:'#e8e1e1',
      width:'80%',
      height:'80%',
      borderRadius:20,
      borderWidth:2,
      borderStyle:'solid',
      borderColor:'blue',
      paddingLeft:10,
    }}>

    </TextInput>
    <TouchableOpacity style={styles.touch} 
    onPressIn={() => setonpressin(true)}
    onPressOut={() =>{ 
      setonpressin(false);
      // addModule();
      add();
    }}
    >
        <AntDesign name="pluscircle" size={24} color={onpressin? 'black': 'white'} />
    </TouchableOpacity>
  </View>
  <ScrollView>
      {
        list.map((item,index) => {
          return <Task key={index} module={token}/>
        })
      }
    </ScrollView>
  </View>

</DrawerSceneWrapper>
   
  
  )
}

export default Realtime_Sc

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input: {
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  touch: {
    height:50,
      width:50,
      backgroundColor:'blue',
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
  }
})