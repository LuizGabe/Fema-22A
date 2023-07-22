import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Texto () {
  return (
    <View style={style.container}>
      <Text style={style.title}>
        Vai fazer um churrasco mas não sabe o que comprar?
      </Text>

      <Text style={style.text}>
        Final de semana chegando e vem aquela vontade de fazer um churrasco. Nessa hora bate uma dúvida da quantidade de carne e de bebidas que cada convidado vai consumir. Veja abaixo uma média do consumo por pessoa.
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    color: '#313131',
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
    color: '#313131',
    lineHeight: 20
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    padding: 20,
  }
})