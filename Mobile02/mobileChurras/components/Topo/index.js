import React from 'react';
import { View, Text, Image } from 'react-native';

import { StyleSheet } from 'react-native'

import churrasco from '../../assets/churrasco.png';

export default function Topo() {
  return (
    <View style={style.container}>
      <Image style={style.img} source = { churrasco } />

      <View style={style.textContainer}>
        <Text style={style.title}>Churrasco em casa</Text>
        <Text style={style.subtitle}>Calculando a comida e a bebida</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#00a79d',

    justifyContent: "center",
    alignItems: "center",

    paddingTop: 40,
    paddingBottom: 20,
    
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    
    flexDirection: "row"
  },
  img: {
    borderRadius: 50,
    width: 60,
    height: 60,

    borderColor: '#fff',
    borderWidth: 1,

    marginRight: 15,
  },
  title: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 18,
    textTransform: "uppercase",
  },
  subtitle: {
    color: '#fff',
  },
})
