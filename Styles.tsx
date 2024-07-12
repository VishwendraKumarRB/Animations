import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fadingContainer: {
      padding: 20,
      backgroundColor: 'powderblue',
    },
    fadingText: {
      fontSize: 28,
    },
    buttonRow: {
      flexBasis: 100,
      justifyContent: 'space-evenly',
      marginVertical: 16,
    },
    reanimatedView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    circleView:{
      height:200,
      width:200,
      borderRadius:100,
      backgroundColor:"red"
    },
    btn:{
      borderWidth:1,
      borderRadius:5,
      width:150,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      marginTop:40,
      backgroundColor:"blue"
    },
    btnText:{
      color:"#fff",
      fontSize:18,
      textAlign:"center"
      
    },
    scrollAnimationView:{
      flex:1
    }
  });
  export default Styles