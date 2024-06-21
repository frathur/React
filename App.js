import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Component/Welcome';

export default function App() {
  const names =["Frank","Ella","Gideon","John","Beatrice"];
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

    {names.map((name) => (
       <Welcome name={name} />
    ))}
      
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
  
  }
});
