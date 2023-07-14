import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Task  (props) {
  return (
     <View style={styles.container}>
      <Text style={styles.token}>{props.module}</Text>

      {/* data  */}
      <View style={styles.body}>
      <View style={styles.viewdata}>
      <Text style={styles.id}>Led:  </Text>
      <Text style={styles.data}>"ON"</Text>
      </View>

      {/*  */}
      <View style={styles.viewdata}>
      <Text style={styles.id}>Detection  </Text>
      <Text style={styles.data}>"Waring"</Text>
      </View>


      </View>
    </View>
   

  )
}

export default Task

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:87,
        width:'100%',
        borderRadius:20,
        alignItems:'center',
        paddingHorizontal:10,
        paddingBottom:5,
        borderColor:'black',
        borderWidth:2,
        marginTop:10,
    },
    body:{
        alignItems:'flex-start',
        width:'100%',
    },
    token:{
        fontSize:20,
        fontWeight:'800',
        color:'blue',
    },
    id:{
        fontSize:18,
        fontWeight:'600',
    },
    data: {
        fontSize:16,
        fontWeight:'400',
    },
    viewdata:{
        flexDirection:'row',width:'100%',
        alignItems: 'center',
        borderBottomWidth:2,
        borderBottomColor:'black',
        borderRadius:5,
    }
})