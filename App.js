import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import antwoord from './database.js';

export default function App() {
  // let postsrequest = () => {
  // fetch("http://192.168.236.132/")
  //   .then(res => {
  //     console.log(res.status)
  //     console.log(res.headers)
  //     return res.json();
  //   })
  //   .then(
  //     (result) => {
  //       console.log(result);
  //      },
  //      (error) => {
  //       console.log(error)
  //      } 
  //   )
  // }
  return (
    <View style={styles.container}>
      <Text>Nick is dik</Text>
      <StatusBar style="auto" />
      <View><Button title='klik hier' color='red' onPress={"ballen"}></Button></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
