import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <LinearGradient colors={['#63CAC6', '#1E61B0']} style={styles.container}>
      <FontAwesome5 
        style={styles.userIcon}
        solid
        name='user-circle' 
        size={190} 
        color='white'
      />
      <View style={styles.input}>
        <FontAwesome5 
          name='user' 
          size={20} 
          color='#008BB2'
          style={styles.inputIcons}
        />
        <Text style={styles.inputText}>Username</Text>
      </View>
      <View style={styles.input}>
        <FontAwesome5 
          name='lock' 
          size={20} 
          color='#008BB2'
          style={styles.inputIcons}
        />
        <Text style={styles.inputText}>Password</Text>
      </View>
      <View style={styles.login}>
        <Text style={styles.loginText}>Login Now</Text>
      </View>
      <View>
        <FontAwesome5 name='check' style={{borderColor: 'white', borderWidth:1, height:15, width:15}} color={'white'}></FontAwesome5>
        <Text style={{color: 'white'}}>Remember me</Text>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  userIcon: {
    marginTop: 100,
    marginBottom: 50,
  },
  text: {
    marginBottom: 50,
    color: 'red',
    fontSize: 20
  },
  inputText: {
    fontSize:30,
    color:'#008BB2',
    fontStyle: undefined
  },
  input: {
    backgroundColor: '#40F2FC',
    borderRadius: 100,
    width: 290,
    height: 50,
    alignItems: 'center',
    display: 'flex',
    marginBottom: 30,
  },
  login: {
    backgroundColor: '#f5b5ac',
    marginTop: 10,
    borderRadius: 100,
    width: 310,
    height: 50,
    alignItems: 'center',
    display: 'flex',
    
  },
  loginText: {
    color: 'white',
    fontSize:30,
  },
  inputIcons: {
    position: 'absolute',
    left:24,
    top:10
  }
});

export default App
