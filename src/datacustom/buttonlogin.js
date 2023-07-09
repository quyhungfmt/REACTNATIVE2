import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Buttonlogin = props => {
    const context = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}
            </Text>      
        </View>
    )
        return<TouchableOpacity onPress={props.onPress}>{context}</TouchableOpacity>
}
   
const styles = StyleSheet.create({
    button: {
        padding:16,
        width:200,
        borderRadius:24,
        alignItems:'center',
        borderBottomWidth:5,
        borderBottomColor: '#2f2828',
    },
    text: {
        color:'white',
        fontSize:20
    }

});
export default Buttonlogin;