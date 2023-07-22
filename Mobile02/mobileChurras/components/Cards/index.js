import React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import dados from './dados';

export default function Cards () {
  return (
    <View style={style.container}>
      {dados.map((item, index) => {
        return (
          <View style={style.cardContainer} key={index}>

            <Image style={style.img} source = { item.img }/>

            <Text style={style.title}>
              {item.nome}
            </Text>

            <Text style={style.subtitle}>
              {item.valor}
            </Text>

          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    flexWrap: 'wrap',
    padding: 30
  },
  cardContainer: {
    alignItems: "center",
    backgroundColor: '#ddf2ed',
    borderColor: '#e6e6e6',
    
    borderRadius: 10,
    borderWidth: 1,
    minWidth: 145,
    padding: 10,
    marginBottom: 10
  },
  img: {
    width: 30,
    height: 30
  },
  title: {
    color: '#00a79d'
  },
  subtitle: {
    color: '#00a79d',
    fontWeight: "700",
    fontSize: 20
  },
})