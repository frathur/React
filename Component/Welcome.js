import React from "react";
import { View,Text,StyleSheet } from "react-native"; 
const Welcome = (props) =>{
    return(
      <View>
          <Text style={styles.text}>Hello {props.name}</Text>  
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize:20,
      textAlign:"left",
      fontStyle:"normal",
      fontWeight:"bold",
    
    }})
  export default Welcome;