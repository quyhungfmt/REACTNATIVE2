import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    headerlogin:{
        flex:1,
          backgroundColor:'#869fe4',
          borderBottomEndRadius:140,
          borderBottomColor: '#c2cef2',
          borderBottomStartRadius:70,
          borderTopStartRadius:75,
          borderBottomWidth:8,
      },
      headerlogin1: {
        backgroundColor:'white',
        flex:1,
        height:90,width:'90%',
        marginTop:10,
        marginLeft:5,
        borderBottomEndRadius:100,
        borderRadius:10,
        borderBottomLeftRadius:60,
        borderTopLeftRadius:60,
        flexDirection: 'row',
        alignItems: 'center',
        },
      textlogin : {
        color:'white',
        fontSize : 32,
        paddingRight:80,
        fontWeight: 'bold',
      },

      textEmailandpassword : {
        fontSize:16,
        fontWeight: 'bold',
        color: 'white',
      },
      textinput : {
        backgroundColor:'#5a5984',
        width:'92%',
        borderRadius:10,
        padding:5,
      },
      emailInDrawerContent: 
        {
          fontSize:15,
          fontWeight:'900',
          fontStyle:'normal',
          color:'white',
          marginTop:10,
      }
      
})
export default styles;