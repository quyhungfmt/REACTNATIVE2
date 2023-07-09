import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginStyle = props => {
    const context2 = (
        <View style={[styles.header,{backgroundColor: props.color, marginTop:props.top,
        marginLeft:props.left}]}>
             <Text style={[styles.text,{color:props.colortext}]}>{props.text}
            </Text>   
        </View>
    )
    return<TouchableOpacity onPress={props.onPress}>{context2}</TouchableOpacity>
}



const styles = StyleSheet.create({
    header : {
        width:50,
        height:50,
        borderRadius:80,
        alignItems: 'center',
        borderBottomWidth:3,
        borderBottomColor: '#857a7a',

    },
    text:{
        fontSize:30,
        fontStyle:'italic',
        fontWeight:'bold',
    }
})
export default LoginStyle;