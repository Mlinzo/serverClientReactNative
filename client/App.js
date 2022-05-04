import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const API = "http://192.168.0.108:5000/" 
  const [getText, setGetText] = useState('Waiting for request...');
  const [postText, setPostText] = useState('Waiting for request...');

  const getRequest = async () => {
    await fetch(API, {method: 'GET'})
      .then((res) => res.json() )
      .then((resJson) => setGetText(resJson.message) )
      .catch((err) => console.error(err));
  }
  const postRequest = async () => {
    await fetch(API, {method: 'POST'})
      .then((res) => res.json() )
      .then((resJson) => setPostText(resJson.message) )
      .catch((err) => console.error(err));
  }

  
  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <View style={{padding: 5}}>
          <Button title="Get request" onPress={getRequest}/>
          <Text>{getText}</Text>
        </View>
        <View style={{padding: 5}}>
          <Button title="Post request" onPress={postRequest}/>
          <Text>{postText}</Text>
        </View>
        <StatusBar style="auto"/>
      </View>
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
});
